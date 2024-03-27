import { useState } from "react";

import images from "../../assets";
import "./Footer.scss";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    // eslint-disable-next-line
    setIsFormSubmitted(true);
  };

  return (
    <div className="Contact">
      <h2 className="head-text">
        Take A Coffie & <span>Chat With Me</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hammadzaeem4846@gmail.com" className="p-text">
            hammadzaeem4846@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tell:+91 (9315591062)" className="p-text">
            +91 (9315591062)
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              name="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank You for <span>getting in Touch !!</span>
          </h3>
        </div>
      )}
    </div>
  );
}
export default Footer;
