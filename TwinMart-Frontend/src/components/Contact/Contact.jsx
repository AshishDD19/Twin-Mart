import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataObj = new FormData();
    formDataObj.append("access_key", "bf2f9282-7df2-4833-920a-9fed19501b84"); 
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResult("Failed to send message ");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have any questions, feedback, or issues? We’d love to hear from you!
          Just fill out the form below and our team will get back to you as soon
          as possible.
        </p>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          <span className="form-status">{result}</span>
        </form>

        <div className="contact-info">
          <h3>Reach Us At</h3>
          <p> TwinMart Pvt. Ltd, Bengaluru, India</p>
          <p> +91 98765 43210</p>
          <p> contacttwinmart@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
