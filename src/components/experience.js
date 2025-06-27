import React from "react";
import "./edu.css"; // Assuming you will have CSS for styling

const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer-intern",
    startDate: "05/2025",
    endDate: "Present",
    location: "NextAstra Technologies pvt. ltd.Pune,Maharashtra(OnSite)",
    experiences: "Working on a project to develop a web application using React.js and Node.js. Involved in both front-end and back-end development, focusing on creating a responsive and user-friendly interface."
  },
  {
    id: 2,
    role: "Full Stack web Developer",
    startDate: "08/2024",
    endDate: "01/2025",
    location: "Main Flow Services and technologies pvt. ltd. (Remote)",
    experiences: "created a small projects and landing page using React.js and Node.js. Gained experience in building responsive web applications and working with RESTful APIs."
  }
];

const experience = () => {
  return (
    <>
    <h1>Experience</h1>
    <div className="education-container" id="experience">
      {experienceData.map((edu) => (
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

export default experience;
