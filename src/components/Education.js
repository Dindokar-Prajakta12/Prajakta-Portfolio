import React from "react";
import experience from "./data/experience.json";
import './edu.css';

const Education = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EDUCATION</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span>{data.location}</span> <br />
                    <span> Year: {data.startDate} - {data.endDate} </span>
                  </h4>
                  <h5>Percentage: {data.experiences}</h5>
                </div>

              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;