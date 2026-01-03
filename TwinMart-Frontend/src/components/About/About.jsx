import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      
      <section className="about-header">
        <h1>About TwinMart</h1>
        <p>
          TwinMart is an innovative retail platform designed to bridge the gap
          between offline physical stores and online shopping. Our goal
          is to make shopping smarter, faster, and more convenient whether
          you're at home or inside the store.
        </p>
      </section>
      
      <div className="container">
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate developers and retail enthusiasts who
          believe that shopping should be effortless. TwinCart was created to
          bring technology into physical shopping experiences, enabling
          customers to scan, shop, and pay  all from their smartphones.  
          With our e-commerce platform, we also empower users to shop online
          anytime, anywhere.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the shopping journey by integrating
          barcode-based offline shopping with modern e-commerce technology.
          We aim to save customer time and offer retailers powerful analytics
          for smarter inventory management.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a future where technology enhances every part of the
          retail experience. TwinCart strives to be India’s leading smart retail
          platform trusted by both local stores and global brands.
        </p>
      </section>

      <section className="about-section">
        <h2>What Makes Us Different?</h2>
        <ul>
          <li> Seamless integration of offline & online shopping</li>
          <li> Real-time barcode scanning for quick checkout</li>
          <li> Multiple payment options — UPI, card, COD</li>
          <li> Instant order updates & digital invoices</li>
          <li> Smart product recommendations using Product Management</li>
        </ul>
      </section>
      
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-card">
            <img src="/images/team1.png" alt="Karthik" />
            <p>
              “Karthik has been in the retail and advertising industry for over
              a decade, continuously evolving with changing technology trends.”
            </p>
            <h3>Karthik</h3>
            <span>Marketing Head</span>
          </div>

          <div className="team-card">
            <img src="/images/team2.png" alt="Punith" />
            <p>
              “Punith creatively blends user experience and design, ensuring
              TwinMart feels modern, responsive, and customer-focused.”
            </p>
            <h3>Punith</h3>
            <span>Creative Director</span>
          </div>

          <div className="team-card">
            <img src="/images/team2.png" alt="Pavan" />
            <p>
              “Pavan manages partnerships and media relations, driving TwinMart’s
              growth through innovation and collaboration.”
            </p>
            <h3>Pavan</h3>
            <span>Operations Manager</span>
          </div>
        </div>
        <p className="team-desc">
          Our TwinMart team is comprised of developers, marketers, and
          entrepreneurs working together to redefine the way India shops
          bridging physical and digital experiences seamlessly.
        </p>
      </section>
    </div>
    </div>
  );
};

export default About;
