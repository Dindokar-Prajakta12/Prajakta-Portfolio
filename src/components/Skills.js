// import React from "react";
// import skills from "./data/skills.json";

// const Skills = () => {
//   return (
//     <>
//       <div className="container skills" id="skills">
//         <h1>SKILLS</h1>
//         <div className="items">
//           {skills.map((data) => (
//             <>
//               <div
//                 className="item"
//                 key={data.id}
//                 data-aos="flip-left"
//                 data-aos-duration="1000"
//               >
//                 <h3>{data.title}</h3>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;


// import React from "react";
// import skills from "./data/skills.json";

// const Skills = () => {
//   return (
//     <>
//       <div className="container skills" id="skills">
//         <h1>SKILLS</h1>
//         <div className="skills-categories">
//           {skills.map((group) => (
//             <div className="skills-category" key={group.category}>
//               <h2>{group.category}</h2>
//               <div className="skills-list">
//                 {group.skills.map((skill) => (
//                   <div
//                     className="skill-item"
//                     key={skill.title}
//                     data-aos="flip-left"
//                     data-aos-duration="1000"
//                   >
//                     <span>{skill.title}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;


// import React from "react";
// import skills from "./data/skills.json";
// import "./skills.css"; // Assuming you will have CSS for styling
// const Skills = () => {
//   return (
//     <>
//       <div className="container skills" id="skills">
//         <h1>SKILLS</h1>
//         <div className="skills-categories1">
//           {skills.map((group) => (
//             <div className="skills-category" key={group.category}>
//               <h2>{group.category}:</h2>
//               <p>
//                 {group.skills.map(skill => skill.title).join(", ")}.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;


import React from "react";
import skills from "./data/skills.json";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 className="skills-title">SKILLS</h1>
        <div className="skills-categories1">
          {skills.map((group) => (
            <p key={group.category}>
              <span className="skills-category-title">{group.category}:</span> {group.skills.map(skill => skill.title).join(", ")}.
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;