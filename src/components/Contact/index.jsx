import "./index.css";

const ContactUs = () => {
  return (
    <div className="con container-fluid py-5 bg-dark text-white min-vh-100">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Contact Us
      </h2>

      <div className="d-flex flex-column align-items-center gap-3 contact-list">
        <div className="contact-card">
          <p className="contact-name">Naveen</p>
          <p className="contact-info">Phone: 9876543210</p>
        </div>

        <div className="contact-card">
          <p className="contact-name">Riyaz</p>
          <p className="contact-info">Phone: 6739996847</p>
        </div>

        <div className="contact-card">
          <p className="contact-name">Sakthin</p>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
      </div>

      <div className="contact-footer">
        <p>We are here to assist you. Feel free to reach out!</p>
      </div>
    </div>
  );
};
export default ContactUs;
