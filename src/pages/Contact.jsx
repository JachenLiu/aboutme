import React from 'react';
import '../styles/Contact.css'

export function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, please fill out the form below or reach out to me via email at jachenliu2017@gmail.com.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
