import React, { useEffect, useRef, useState } from "react";

function PlanePath({ activeContinent }) {
    const planeRef = useRef(null);
    const pointsRef = useRef([]);
    const [ready, setReady] = useState(false);

    const continents = ["europe", "americas", "africa", "asia", "oceania"];
    const activeIndex = continents.indexOf(activeContinent);

    useEffect(() => {
        // чекаємо коли DOM з’явиться
        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready || activeIndex < 0 || !planeRef.current || !pointsRef.current[activeIndex])
            return;

        const plane = planeRef.current;
        const target = pointsRef.current[activeIndex];

        // обчислюємо координати
        const planeRect = plane.parentElement.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        // позиція точки відносно лінії
        const offset = targetRect.left - planeRect.left + targetRect.width / 2 - plane.offsetWidth / 2;

        // застосовуємо анімацію руху
        plane.style.transform = `translateX(${offset}px)`;
    }, [activeIndex, ready]);

    return (
        <div className="plane_wrapper">
            <div className="line">
                <img
                    ref={planeRef}
                    src="/assets/plane.png"
                    alt="plane"
                    className="plane"
                    style={{
                        transform: "translateX(-150%)",
                        transition: "transform 2s ease-in-out",
                    }}
                />
                <div className="points">
                    {continents.map((c, i) => (
                        <div
                            key={c}
                            ref={(el) => (pointsRef.current[i] = el)}
                            className={`point ${i === activeIndex ? `active-${activeIndex}` : ""}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlanePath;
