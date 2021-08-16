import emailjs from "emailjs-com";
import { useState, useEffect, useRef } from "react";

import { SendButton } from "../components/Button";
import { Dots, ZigzagBig } from "../components/BackgroundShapes";
import {
  ContactTriangleLeft,
  ContactTriangleRight,
} from "../components/GreyShapes";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_84k2hhr",
        e.target,
        "user_1vTitN9ZIwcUQCPXC08Ih"
      )
      .then(
        (res) => {
          console.log(res.text);
          alert("Email sent");
        },
        (err) => {
          console.log(err.text);
          alert(err.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">
        Get <strong>In Touch</strong>
      </h2>
      <div className="contact__container">
        <div className="contact__left-grid">
          <form className="contact__form" onSubmit={sendEmail}>
            <h3 className="contact__form-title">Contact Me</h3>
            <input
              type="text"
              className="contact__input contact__input--name"
              id="name"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              className="contact__input contact__input--email"
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <input
              type="text"
              className="contact__input contact__input--subject"
              id="subject"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="contact__input contact__input--textarea"
              id="message"
              cols="30"
              rows="8"
              placeholder="Write a Message"
              name="message"
            ></textarea>

            <SendButton />
          </form>

          <Dots classNm="contact__dots" />
          <ZigzagBig classNm="contact__zigzag-big" />
        </div>

        <div className="contact__right-grid">
          <div className="contact__details">
            <h3 className="contact__details-title">My Contact Details</h3>
            <ul className="contact__details-list">
              <li className="contact__details-item">
                <strong>Email</strong>
                devmarco.02@gmail.com
              </li>
              <li className="contact__details-item">
                <strong>Phone</strong>
                +63 995 734 5767
              </li>
              <li className="contact__details-item">
                <strong>Email</strong>
                1269-B Lavanderos
                <br />
                Street, Sampaloc, Manila
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactTriangleLeft />
      <ContactTriangleRight />

      <footer className="contact__copyright">Copyright 2021 devMarco</footer>
    </section>
  );
};

export default Contact;
