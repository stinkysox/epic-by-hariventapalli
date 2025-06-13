import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi"; // X (Twitter)

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">Epic by Hari Ventapalli</h2>

      <p className="footer-tagline">
        I don't collect pictures — I collect memories.
      </p>

      <p className="footer-note">
        • Wedding · Candids · Pre & Post Weddings · Kids
      </p>

      <p className="footer-contact">
        hariventapalli@gmail.com | +91 94930 78753
      </p>

      <p className="footer-address">
        Based in India · Available for weddings & sessions worldwide
      </p>

      <div className="footer-socials">
        <a
          href="https://www.instagram.com/hariventapalli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/p/Storeis-by-Hari-ventapalli-100069387847299/"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter / X">
          <PiXLogoBold />
        </a>
        <a href="#" aria-label="Pinterest">
          <FaPinterestP />
        </a>
        <a
          href="https://www.youtube.com/@storiesbyhariventapalli6627"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>

      <p className="footer-copyright">
        © 2025 Epic by Hari Ventapalli · All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
