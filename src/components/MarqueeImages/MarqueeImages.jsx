import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  // Define images directly in the component
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/d34ZM6RC/3.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/bYTt2YXv/3days-copy-copy.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/Dyp4BCwk/5.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/NFJFCMY7/8.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/m2ktzQNd/9.jpg",
        category: "Right Images",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/02yJGgx0/4.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/cHWvr2XY/6.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/QdWCShz1/12.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/ZRYTkSwf/16.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/Bbks114y/18.jpg",
        category: "Left Images",
      },
    ],
  };

  const rightArrowImages = categories["Right Images"];
  const leftArrowImages = categories["Left Images"];

  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  const renderImages = (imageArray, direction) => {
    return imageArray.length > 0
      ? imageArray.map((image, idx) => (
          <img
            key={`${direction}-${idx}`}
            className="marquee-img"
            src={image.imageUrl}
            alt={`${direction === "right" ? "Right" : "Left"} Slide ${idx + 1}`}
          />
        ))
      : generateEmptyImages();
  };

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightArrowImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftArrowImages, "left")}
        </Marquee>
      </div>

      <div className="instagram-button-container">
        <a
          href="https://www.instagram.com/hariventapalli/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
        >
          FOLLOW EPIC BY HARI VENTAPALLI
        </a>
      </div>
    </div>
  );
};

export default MarqueeImages;
