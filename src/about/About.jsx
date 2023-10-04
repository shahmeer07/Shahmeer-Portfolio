import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="aboutsec">
      <h2>About Me</h2>
      <div className="aboutContent">
        <div className="profileImage">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/background%20removed.png?alt=media&token=a5f7a2fa-426e-4ef3-837f-eb533fb5de8d"
            alt="Profile"
            className="profileImg"
          />
        </div>
        <div className="aboutText">
          <p>
            Hi, I'm Shahmeer Khan, a passionate Data Engineer and Big Data
            Aspirant based in Karachi, Pakistan. I have a strong foundation in
            Efficient and Reliable Data Analysis. My journey began when I
            discovered my love for coding during my pre-teen days.
          </p>
          <p>
            I specialize in diving deep in large data sets seeking out answers
            that help in Data driven decision making, With a keen eye for detail
            and a commitment to clean code, I strive to create exceptional
            digital solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest
            developments in the tech world, contributing to open-source
            projects, or enjoying a good cup of coffee while brainstorming new
            ideas to help our world utilise its limited resources efficiently
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
