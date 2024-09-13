import React from "react";
import "./edu.css"; // Assuming you will have CSS for styling

const educationData = [
  {
    id: 1,
    role: "Computer Science and Engineering",
    startDate: "2019",
    endDate: "2023",
    location: "Mauli College of Engineering, Shegaon",
    experiences: "77%"
  },
  {
    id: 2,
    role: "Higher Secondary Certificate",
    startDate: "2017",
    endDate: "2019",
    location: "Maharashtra State Board",
    experiences: "56.92%"
  },
  {
    id: 3,
    role: "Secondary School Certificate",
    startDate: "2016",
    endDate: "2017",
    location: "Maharashtra State Board",
    experiences: "79.60%"
  }
];

const Education = () => {
  return (
    <>
    <h1>EDUCATION</h1>
    <div className="education-container" id="experience">
      {educationData.map((edu) => (
        <div key={edu.id} className="education-card" 
          data-aos="zoom-in"
        data-aos-duration="1000">
          <h3>{edu.role}</h3>
          <p>
            {edu.startDate} - {edu.endDate}
          </p>
          <p>{edu.location}</p>
          <p>Percentage: {edu.experiences}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Education;
