import React from 'react';

const statsData = [
    { percent: '75%', article: 'of travel is booked online', chartClass: 'chart1', percentClass: 'percent1' },
    { percent: '85%', article: 'of travelers look for travel information online', chartClass: 'chart2', percentClass: 'percent2' },
    { percent: '13%', article: 'of online time is dedicated to travel', chartClass: 'chart3', percentClass: 'percent3' },
];

function StatsSection() {
    return (
        <section id="stat_sect">
            <h2>Statistics</h2>
            <div className="stat_wrapper">
                {statsData.map((stat, index) => (
                    <div className="diagram" key={index}>
                        <div className={`doughnut-chart ${stat.chartClass}`}></div>
                        <p className={`stat_percent ${stat.percentClass}`}>{stat.percent}</p>
                        <p className="stat_article">{stat.article}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;