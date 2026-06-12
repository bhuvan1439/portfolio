import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "../Icons";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = document.getElementById("contact");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    setFormStatus({ type: null, text: "" });

    // Simulated email integration
    setTimeout(() => {
      setLoading(false);
      setFormStatus({
        type: "success",
        text: "Message sent successfully! Sangam Bhuvan Reddy will get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className={`contact-section reveal ${isVisible ? "active" : ""}`}>
      {/* Visual background gradient */}
      <div className="contact-bg-glow" />

      <div className="container">
        <div className="section-header">
          <span className="badge">Get In Touch</span>
          <h2>Contact Me</h2>
          <p>
            Have an open role, a hackathon idea, or a project collaboration in mind? Drop me a message and let's build something exceptional.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Panel: Info Card */}
          <div className="contact-info-card glass-card">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-subtitle">Feel free to reach out via email, social links, or submit the form.</p>

            <div className="contact-nodes">
              <div className="contact-node-row">
                <div className="contact-icon-box">
                  <Mail size={16} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p className="selectable-text">bhuvan18reddy@gmail.com</p>
                </div>
              </div>

              <div className="contact-node-row">
                <div className="contact-icon-box">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Vijayawada, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="social-box">
              <h4>Social Networks</h4>
              <div className="social-links-row">
                <a
                  href="https://www.linkedin.com/in/bhuvan-reddy-921496341/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle ln-bg"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/bhuvan1439"
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle gh-bg"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Form Card */}
          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              {formStatus.text && (
                <div className={`form-status ${formStatus.type === "success" ? "success" : "error"}`}>
                  {formStatus.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  <span>{formStatus.text}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span> <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
