import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import pic from './Pra.jpg'

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I'm MERN stack developer",
        "Frontend developer",
        "Backend developer",
        "Software developer",
        "Manual tester"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>Prajakta</h1>
          <p>My Name is Prajakta Dindokar</p>
          {/* <p>I am a recent graduate with a degree in Computer Science and Engineering, specializing in frontend development.
             I have hands-on experience with small React-based projects and a solid understanding of web technologies, including
              HTML, CSS, JavaScript, and Bootstrap. In addition to frontend skills, I am proficient in Java, manual testing,
             and networking. As I embark on my professional journey, I am eager to apply my knowledge and contribute to innovative projects..</p> */}

<p>MERN Stack Developer with hands-on experience in both frontend and backend development. Proven ability to build
and integrate APIs, develop responsive admin dashboards, and contribute effectively to corporate projects.
Committed to continuous learning and delivering modern, efficient solutions aligned with industry trends.</p>

          <a
            href='https://drive.google.com/file/d/1Pj_nu3GHbUCkhuqKTkT8yw234AApE0d1/view?usp=sharing'
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={pic} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;