import fs from "fs";
import fetch from "node-fetch";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: "./.env" });

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const OUTPUT_PATH = "../src/data/travel-guide.json";


async function fetchCountries(region) {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Error fetching ${region}: ${res.status}`);

    return res.json();
}


async function getCapitalsList() {
    const europe = await fetchCountries("europe");
    const asia = await fetchCountries("asia");

    const merged = [...europe, ...asia];

    const result = merged
        .filter(c => c.capital && c.capital.length > 0)
        .map(c => ({
            country: c.name.common,
            capital: c.capital[0]
        }));

    console.log(`✔ Знайдено столиць: ${result.length}`);
    return result;
}


async function generateCityInfo(country, capital) {
    const prompt = `
You must respond ONLY in valid JSON. 
Provide 5 REAL, factual, verifiable places worth visiting in this capital.

For each place include strictly:
- place_name (real existing location)
- intriguing_title
- description (3 factual sentences)
- coordinates (real geographic coordinates)
- permanent_wiki_link (real working link)

Format EXACTLY:

{
  "capital_name": "...",
  "country": "...",
  "places_to_visit": [
    {
      "place_name": "...",
      "intriguing_title": "...",
      "description": "...",
      "coordinates": "...",
      "permanent_wiki_link": "..."
    }
  ]
}

Capital: ${capital}
Country: ${country}
`;

    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.4,
            messages: [{ role: "user", content: prompt }]
        });

        const text = response.choices[0].message.content;

        try {
            const parsed = JSON.parse(text);
            return parsed;
        } catch (err) {
            console.log(`⚠ Помилка JSON у столиці ${capital}. Спроба виправлення…`);
            const fixed = text
                .replace(/^```json/, "")
                .replace(/```$/, "");
            return JSON.parse(fixed);
        }

    } catch (error) {
        console.error(`❌ Помилка генерації для ${capital}:`, error.message);
        return null;
    }
}


async function main() {
    console.log("⏳ Отримую список країн...");
    const capitals = await getCapitalsList();

    const finalData = { destinations: [] };

    for (const { country, capital } of capitals) {
        console.log(`\n🌍 Генерація: ${capital}, ${country} ...`);

        const cityData = await generateCityInfo(country, capital);

        if (cityData) {
            finalData.destinations.push(cityData);
            console.log(`✔ Готово: ${capital}`);
        } else {
            console.log(`❌ Пропускаю ${capital} через помилку.`);
        }
    }

    fs.writeFileSync(
        OUTPUT_PATH,
        JSON.stringify(finalData, null, 2),
        "utf-8"
    );

    console.log("\n🎉 Файл travel-guide.json оновлено!");
    console.log(`📁 Шлях: ${OUTPUT_PATH}`);
}

main();
