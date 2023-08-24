import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7y7csey",
        "template_a3bc2ci",
        form.current,
        "Q210lYyTc4SDiAc-P"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="secid">
      <div className="contact">
        <h2 className="contactPageTitle"> Contact</h2>
        <span className="contactDesc">
          Fill out the form below to dicuss work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
          />
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="link">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/facebook-icon.png?alt=media&token=4bf3e4f3-0aa0-4741-bded-694a26465274"
              alt="FB"
              className="links"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shahmeer-s-final-portfolio.appspot.com/o/instagram.png?alt=media&token=6a5332de-2ef4-49ea-8ce5-3ffbbcf3d1e7"
              alt="Instagram"
              className="links"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
              alt="LinkedIn"
              className="links"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github"
              className="links"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
