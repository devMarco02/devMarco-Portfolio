import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import Alert from "../components/Alert";
import { SendButton } from "../components/Button";
import { Dots, ZigzagBig } from "../components/BackgroundShapes";
import {
  ContactTriangleLeft,
  ContactTriangleRight,
} from "../components/GreyShapes";
import { Copyright } from "../components/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isAlert, setIsAlert] = useState(false);
  const [text, setText] = useState("");
  let formRef = useRef(null);
  let detailsListRef = useRef(null);

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
          setText({
            status: "Your message has been sent.",
            isSuccess: true,
            message: "I will get back to you soon. Thank you.",
          });
          setIsAlert(true);
        },
        (err) => {
          setText({
            status: "Something went wrong.",
            isSuccess: false,
            message:
              "Please try again or email me directly at devmarco.02@gmail.com",
          });
          setIsAlert(true);
        }
      );
    e.target.reset();
  };

  //animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        toggleActions: "restart none none reverse",
        start: () => "top center",
        invalidateOnRefresh: true,
      },
    });
    const formChildren = formRef.current.childNodes;
    const details = detailsListRef.current.childNodes;

    //title
    tl.fromTo(
      ".contact__title",
      { opacity: () => 0, scale: () => 0 },
      { opacity: () => 1, scale: () => 1, duration: 0.3, delay: 0.1 }
    );
    //form
    tl.fromTo(
      formChildren,
      { opacity: () => 0, scale: () => 0 },
      {
        opacity: () => 1,
        scale: () => 1,
        duration: 0.6,
        stagger: 0.1,
      },
      0.4
    );
    //details title
    tl.fromTo(
      ".contact__details-title",
      { opacity: () => 0, scale: () => 0 },
      { opacity: () => 1, scale: () => 1, duration: 0.3 },
      0.4
    );
    //details list
    tl.fromTo(
      details,
      { opacity: () => 0, scale: () => 0 },
      {
        opacity: () => 1,
        scale: () => 1,
        duration: 0.6,
        stagger: 0.1,
      },
      0.5
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">
        Get <strong>In Touch</strong>
      </h2>
      <div className="contact__container">
        <div className="contact__left-grid">
          <form className="contact__form" onSubmit={sendEmail} ref={formRef}>
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
            <ul className="contact__details-list" ref={detailsListRef}>
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

      <footer className="contact__copyright">
        <Copyright />
        Copyright 2021 devMarco
      </footer>

      {isAlert && <Alert text={text} close={() => setIsAlert(false)} />}
    </section>
  );
};

export default Contact;
