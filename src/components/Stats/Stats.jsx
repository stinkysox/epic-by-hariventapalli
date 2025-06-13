import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Stats.css";

const stats = [
  {
    value: 100,
    label: "Stories captured. Love, laughter, and a few happy tears included.",
  },
  {
    value: 5,
    label:
      "Talented humans. Photographers, filmmakers, storytellers, and creative masterminds.",
  },
  {
    value: 2,
    label:
      "Countries, countless love stories, timeless memories captured worldwide.",
  },
  {
    value: 100,
    label: "Happy Clients",
  },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2, // Trigger when 20% is visible
  });

  return (
    <section className="stats-section" ref={ref}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <h2>{inView ? <CountUp end={stat.value} duration={2} /> : 0}+</h2>
          <hr />
          {stat.label && <p>{stat.label}</p>}
        </div>
      ))}
    </section>
  );
};

export default Stats;
