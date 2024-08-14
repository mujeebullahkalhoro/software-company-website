import React from "react";
import "./AwardsRecognition.css";

export default function AwardsRecognition() {
  const awards = [
    {
      title: "Best Software Development Firm",
      organization: "Tech Innovators Awards",
      year: "2023",
      description: "Awarded for excellence in delivering innovative software solutions that drive business growth and customer satisfaction.",
    },
    {
      title: "Top 100 Fastest Growing Tech Companies",
      organization: "GrowthTech Awards",
      year: "2022",
      description: "Recognized for rapid expansion and significant market impact, reflecting our commitment to excellence and innovation.",
    },
    {
      title: "Excellence in Customer Support",
      organization: "Customer Service Excellence Awards",
      year: "2021",
      description: "Honored for outstanding customer service and support, demonstrating our dedication to client success and satisfaction.",
    },
    {
      title: "Best Cybersecurity Solution",
      organization: "Security Leaders Awards",
      year: "2020",
      description: "Awarded for delivering cutting-edge security solutions that protect businesses and ensure data integrity.",
    },
    {
      title: "Innovation in AI & Machine Learning",
      organization: "AI & ML Innovation Awards",
      year: "2019",
      description: "Recognized for pioneering advancements in AI and machine learning, helping businesses harness the power of these technologies.",
    },
  ];

  return (
    <div className="awards-recognition">
      <h1>Awards and Recognition</h1>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <h3>{award.title}</h3>
            <p>
              <strong>{award.organization}</strong> - {award.year}
            </p>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
