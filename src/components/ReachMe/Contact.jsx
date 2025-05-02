import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";  // Assuming you're using MUI for Snackbar
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);  // Track loading state for submit
  const [snackbarMessage, setSnackbarMessage] = useState("");  // Snackbar message
  const [snackbarOpen, setSnackbarOpen] = useState(false);  // Control snackbar visibility
  const [buttonSent, setButtonSent] = useState(false); // Track if the message is sent

  // Handle closing of the snackbar
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const validateForm = () => {
    const { from_name, from_email, message } = form.current;
    const errors = {};

    // Name validation: Check if empty or contains numbers
    if (!from_name.value.trim()) {
      errors.from_name = "Name is required";
    } else if (/\d/.test(from_name.value)) {
      errors.from_name = "Name should not contain numbers";
    }

    // Email validation: Check if empty or invalid
    if (!from_email.value.trim()) {
      errors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(from_email.value)) {
      errors.from_email = "Email must contain '@' symbol";
    }

    // Message validation: Check if empty
    if (!message.value.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return false if errors are present
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);  // Set loading to true when the form is being submitted

      emailjs
        .sendForm("service_wj3wdwl", "template_p3hrbzb", form.current, {
          publicKey: "cXFy1SEfre6r8S_0J",
        })
        .then(
          () => {
            setLoading(false);  // Reset loading state
            setButtonSent(true);  // Change button state to "Sent"
            setSnackbarMessage("Sent successfully!");
            setSnackbarOpen(true);
            form.current.reset();  // Reset form fields after success
          },
          (error) => {
            setLoading(false);  // Reset loading state
            setSnackbarMessage("Failed to send email. Please try again.");
            setSnackbarOpen(true);
          }
        );
    }
  };

  return (
    <div className="containerreach">
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

            <label htmlFor="email">Enter your email address</label>
            <input type="email" id="email" name="from_email" />
            {errors.from_email && (
              <div className="error">{errors.from_email}</div>
            )}

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            {errors.message && <div className="error">{errors.message}</div>}

            <input
              type="submit"
              value={loading ? "Sending..." : (buttonSent ? "Sent" : "Send")}
              disabled={loading}  // Disable the button while loading
              className={buttonSent ? "sent" : ""}  // Apply sent class after successful submission
            />
          </form>
        </div>
      </div>

      {/* Snackbar component for showing success or error message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Contact;
