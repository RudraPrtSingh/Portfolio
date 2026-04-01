import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    // Simulate sending — replace with EmailJS or backend later
    await new Promise((res) => setTimeout(res, 1500));

    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 4000);
  };

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Vite & Tailwind v4.",
      link: ""
    },
    /*{
      title: "E-Commerce Platform",
      desc: "Full-featured e-commerce with cart, checkout & admin dashboard.",
      link: ""
    }*/
  ];

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero fade-in">
        <h1 className="hero-title">Hi, I'm Rudra Pratap Singh</h1>

        <h2 className="hero-subtitle">
          Learning Full Stack Development, Passionate about Building Things
        </h2>

        <p className="hero-text">
          Right now I'm diving into Node.js on the backend — learning how servers work and trying to implement whatever
          I learn through small projects. I'm at the start of my journey but I show up every day and keep building.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View My Work →
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            Contact Me
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2 className="section-title">
          My Projects <span>{"-"}</span>
        </h2>

        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="arrow">↗</div>
          </a>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-left">
          <h1>
            Let's build something <br />
            <span>together.</span>
          </h1>

          <p>
            Currently leveling up in Full Stack Development.<br />
            Front-end is my starting point, and I'm learning more every day.
          </p>

          <div className="contact-info">
            <div>📧 9omsingh22@gmail.com</div>
            <div>📍 IN, Asia</div>
          </div>
        </div>

        {/* <div className="contact-form">
          <h3>Send a Message</h3>
          <p>Got a question or proposal? Go ahead.</p>

          <div className="form-row">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {sent && (
            <div className="success-msg">
              <span>✅</span> Message sent successfully!
            </div>
          )}

          {!sent && (
            <button className="btn-primary" onClick={handleSubmit} disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          )}
        </div>*/}
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2>Online Presence</h2>
          </div>
          <div className="footer-right">
            <a href="https://x.com/Rudraprtsingh" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://github.com/RudraPrtSingh" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;