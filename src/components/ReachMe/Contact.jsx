import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { from_name, from_email, message } = form.current;
    const errors = {};

    if (!from_name.value.trim()) {
      errors.from_name = "Name is required";
      alert("Enter Name");
    }
    if (!from_email.value.trim()) {
      errors.from_email = "Email is required";
      alert("Enter Email");
    } else if (!/\S+@\S+\.\S+/.test(from_email.value)) {
      errors.from_email = "Email address is invalid";
      alert("Invalid email address")
    }
    if (!message.value.trim()) {
      errors.message = "Message is required";
      alert("Message required")
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_wj3wdwl", "template_p3hrbzb", form.current, {
          publicKey: "oDc97aCFbeEEIptfc",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div>
      <h1 className="headtext">Reach Me</h1>
      <div className="contact-container">
        <div className="image-container">
          <img
            src="https://cdn.dribbble.com/users/730703/screenshots/6581243/avento.gif"
            alt="..."
          />
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="textfields">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="from_name" />
            {errors.from_name && (
              <div className="error">{errors.from_name}</div>
            )}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="from_email" />
            {errors.from_email && (
              <div className="error">{errors.from_email}</div>
            )}
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
