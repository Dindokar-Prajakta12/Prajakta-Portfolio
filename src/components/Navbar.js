// import React, { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
//         <div className="left nav_items">Portfolio</div>
        
//         <div className={`right ${menuOpen ? "show" : ""}`}>
//           <a href="#home" className="nav_items">Home</a>
//           <a href="#experience" className="nav_items">Education</a>
//           <a href="#skills" className="nav_items">Skills</a>
//           <a href="#projects" className="nav_items">Projects</a>
//           <a href="#contact" className="nav_items">Contact</a>
//         </div>
//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           &#9776; 
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items">Portfolio</div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>

        {/* Menu Items */}
        <div className={`right ${menuOpen ? "show" : ""}`}>
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Education</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;