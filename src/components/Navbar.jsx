// I have added the social media contacts at the contact.js file for a better UI/UX
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/letter-s-icon-19-256.png?alt=media&token=c1a0f9d7-c15a-49c1-91fb-17f282eb8a17"
        alt="logo"
        className="logo"
      />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills{" "}
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          const section = document.getElementById("secid");
          const offset = 50; // Adjust this value as needed
          const yPosition =
            section.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/contact.png?alt=media&token=5a9c29b6-9ef7-4797-bec3-f83d87a2c261 "
          alt="ContactImage"
          className="desktopMenuImg"
        />
        Contact Me
      </button>

      {/* menu  */}
      {/* /
      /
      /
      /
      /
      /
      / */}

      <img
        src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/menu.png?alt=media&token=29d2b279-d36d-4cc0-ad17-007b407ef808"
        alt="logo"
        className="Menu"
        onClick={() => setShowMenu(!ShowMenu)}
      />
      <div className="NavMenu" style={{ display: ShowMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Skills{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
