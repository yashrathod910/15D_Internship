import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-info">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Feel free to reach out to us.
        </p>

        <div className="info-item">
          <FaPhone />
          <span>+91 9876543210</span>
        </div>

        <div className="info-item">
          <FaEnvelope />
          <span>support@shopease.com</span>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt />
          <span>Ahmedabad, Gujarat, India</span>
        </div>

      </div>

      <div className="contact-form">

        <h2>Send Message</h2>

        <form>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;