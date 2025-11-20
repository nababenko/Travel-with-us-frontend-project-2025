import OpenAI from "openai";

let client;

const getOpenAIClient = () => {
    if (!client) {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error("OPENAI_API_KEY is not set after dotenv.config()");
        }
        client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }
    return client;
};


export const evaluateSurvey = async (req, res) => {
    const answers = req.body;

    try {
        const client = getOpenAIClient();

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content:
                        `Here are a person's travel preferences: ${JSON.stringify(answers)}.
                         You must choose ONE real capital city in the world 
                         that best matches their preferences.
                         Respond ONLY with the city name, nothing else.`
                }
            ]
        });

        const city = completion.choices[0].message.content.trim();
        res.json({ city });

    } catch (err) {
        console.error("OpenAI Error:", err.message);
        res.status(500).json({ city: "Error", details: err.message });
    }
};