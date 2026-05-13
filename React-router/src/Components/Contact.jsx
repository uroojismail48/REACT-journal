import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT</h1>

      <div className="contact-buttons">
        <button onClick={() => navigate("info")}>Info Contact</button>
        <button onClick={() => navigate("form")}>Contact Form</button>
      </div>
    </div>
  );
}

export default Contact;