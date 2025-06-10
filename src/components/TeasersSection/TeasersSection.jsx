import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const TeasersSection = () => {
  const teasersWelcomePackage = {
    backgroundImage: "https://i.postimg.cc/3R3QLRgc/IMG-1943-1.jpg",
    title: "Explore Our Films",
    subtitle: "Films",
    showWelcome: true,
  };

  const videos = [
    "https://www.youtube.com/embed/Bz2eJMu5HW4",
    "https://www.youtube.com/embed/TuXl9ZgCCSw",
    "https://www.youtube.com/embed/8LJ27mxh_Ks",
    "https://www.youtube.com/embed/59J-up7f2mg",
    "https://www.youtube.com/embed/WLKmXiJd64o",
    "https://www.youtube.com/embed/Wei4Jtd_OKk",
    "https://www.youtube.com/embed/RZgsWZ8QFCo",
    "https://www.youtube.com/embed/xrJAJCjk02U",
    "https://www.youtube.com/embed/l7r52Jk_Tb8",
    "https://www.youtube.com/embed/pI-yf2PrSDM",
  ];

  return (
    <>
      <Navbar welcomeConfig={teasersWelcomePackage} />
      <div className="teasers-section">
        <h2 className="teasers-h2">Teasers</h2>

        <p className="teasers-description">
          Every couple has a unique story — raw, beautiful, and deeply personal.
          We don’t just capture moments; we craft timeless cinematic films that
          evoke emotion and preserve the essence of your day. With a strong
          focus on storytelling, artistic vision, and heartfelt emotion, our
          wedding teasers are designed to stay with you — not just as memories,
          but as powerful experiences you’ll feel again and again.
        </p>

        {videos.length === 0 ? (
          <p>No videos to show</p>
        ) : (
          <div className="video-grid">
            {videos.map((src, index) => (
              <div className="video-container" key={index}>
                <iframe
                  src={src}
                  title={`Teaser ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        <div className="youtube-icon">
          <a
            href="https://www.youtube.com/@storiesbyhariventapalli6627"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="glow-youtube" />
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeasersSection;
