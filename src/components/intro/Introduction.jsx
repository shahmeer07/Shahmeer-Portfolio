import React from "react";
import "../Navbar";
import "../intro/Introduction.css";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hello, </span>
        <span className="introText">
          I'm <span className="introName">Shahmeer Khan</span>
          <br /> A Software Engineer
        </span>
        <p className="introPara">
          I am a Skilled Data Engineer and Data Analyst from Karachi, Pakistan
        </p>
        <p className="introPara">
          I am currenly exploring the world of Big Data :D
        </p>
        <Link>
          <button className="btn">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/hireme.png?alt=media&token=9749675c-ff76-460b-9cb9-67e395f3b60e"
              alt="hireme"
              className="btnImg"
            />{" "}
            Hiring
          </button>
        </Link>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/IMG_0517-removebg%20(1).png?alt=media&token=95d1b783-beb4-4ef9-902a-b0ffae8cccb1"
        alt="bg"
        className="bg"
      />
    </section>
  );
};

export default Introduction;
