import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./LatestWork.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const allImages = [
  // Prewedding
  {
    imageUrl: "https://i.postimg.cc/yY8vDrbw/DSC09066.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/c4kTwBq6/DSC08686.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/GmBKQTrK/DSC08235.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/rF7xqnXG/DSC03104.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/bYTt2YXv/3days-copy-copy.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/c4f5357h/11.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/pdHjFmdp/DSC02209.jpg",
    category: "Pre-wedding",
  },
  {
    imageUrl: "https://i.postimg.cc/5tSCqfHp/DSC03026.jpg",
    category: "Pre-wedding",
  },

  // Wedding
  {
    imageUrl: "https://i.postimg.cc/KjwkvzVc/2000.jpg",
    category: "Wedding",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/0e/99/48/0e9948e8b4f8190b56188541bc5c6824.jpg",
    category: "Wedding",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/2c/79/49/2c7949bb2d7c00a4bb6e3864e92431c4.jpg",
    category: "Wedding",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/40/1d/fd/401dfddc2f315f193c93b60689c668f0.jpg",
    category: "Wedding",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/e0/88/7c/e0887c3480cfc11cd908584abef5f12e.jpg",
    category: "Wedding",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/2f/93/f8/2f93f855f5824049f80d3b5c60647f13.jpg",
    category: "Wedding",
  },

  {
    imageUrl:
      "https://i.pinimg.com/736x/46/7e/f4/467ef4c644737b5630ba03d492fcdefc.jpg",
    category: "Engagement",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/02/35/fe/0235fede5fadab6faf132f6724c7e364.jpg",
    category: "Engagement",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/5d/3f/1f/5d3f1fa49511b684cdb586b44534c45a.jpg",
    category: "Engagement",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/d9/09/15/d90915eece57fb4881400b3761506d30.jpg",
    category: "Engagement",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/71/81/a4/7181a4533d2d58ff0995316b7027acf3.jpg",
    category: "Engagement",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/85/04/ef/8504efb48321608ff7454103b839ff43.jpg",
    category: "Engagement",
  },
  // Baby Shoot and Maternity
  {
    imageUrl: "https://i.postimg.cc/xjy4JmTb/DSC09991-2.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/NFJFCMY7/8.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/05fV2qcY/DSC09968-copy.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/tgW500sV/DSC05549.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/gjSyymT1/DSC05489.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/hj01j9bD/DSC05513.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/fTPjJWX9/DSC05387.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/jj0H48Mq/DSC05370.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/g0VvSv7V/DSC04217.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/SsZY3VfM/DSC00179.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/tJYnjPBm/DSC00430.jpg",
    category: "Baby Shoot and Maternity",
  },

  {
    imageUrl: "https://i.postimg.cc/wxGskfvK/1997.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/sxNHJt6H/1995.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/QxvnKZWH/1992.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/JhL6K3x8/29.jpg",
    category: "Baby Shoot and Maternity",
  },
  {
    imageUrl: "https://i.postimg.cc/ZRqLDwyG/28.jpg",
    category: "Baby Shoot and Maternity",
  },

  // Haldi
  {
    imageUrl:
      "https://i.pinimg.com/736x/95/eb/2a/95eb2a6eb73ac2b2ba29a202f2aaa2c8.jpg",
    category: "Haldi",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/ca/39/ed/ca39ed3c77b34e0a0423f7be4bf1d75b.jpg",
    category: "Haldi",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/0b/57/a0/0b57a00d34576c190207988cad3d133f.jpg",
    category: "Haldi",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/1a/15/46/1a1546509f04169015284d9a48094cea.jpg",
    category: "Haldi",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/03/fc/23/03fc233f74c9b035f08953ad2f964b3e.jpg",
    category: "Haldi",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/d8/7e/b6/d87eb629793c31e4c5f6ee4e943b2d03.jpg",
    category: "Haldi",
  },
];

// Dynamically get distinct categories
const categories = Array.from(new Set(allImages.map((img) => img.category)));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const LatestWork = () => {
  const galleryWelcomePackage = {
    backgroundImage: "https://i.postimg.cc/JhL6K3x8/29.jpg",
    title: "Explore Our Gallery",
    subtitle: "Gallery",
    showWelcome: true,
  };
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const filteredImages = allImages.filter(
    (img) => img.category === activeCategory
  );

  useEffect(() => {
    setImagesLoaded(false);
    let loadedCount = 0;
    const imagesToLoad = filteredImages.length;

    if (imagesToLoad > 0) {
      filteredImages.forEach(({ imageUrl }) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          loadedCount += 1;
          if (loadedCount === imagesToLoad) setImagesLoaded(true);
        };
        img.onerror = () => {
          loadedCount += 1;
          if (loadedCount === imagesToLoad) setImagesLoaded(true);
        };
      });
    } else {
      setImagesLoaded(true);
    }
  }, [activeCategory, filteredImages]);

  return (
    <>
      <Navbar welcomeConfig={galleryWelcomePackage} />
      <div className="latestwork-container" id="latestwork">
        <h1>Latest Work</h1>
        <p className="intro-text">
          <strong>Epic by Hari Ventapalli</strong>, we specialize in capturing
          authentic, emotion-filled moments that last a lifetime. Whether it’s a
          wedding, corporate event, maternity shoot, or personal portrait
          session, our experienced team ensures each frame reflects the essence
          of your story with unmatched creativity and professionalism.
        </p>
        <div className="categories-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                category === activeCategory ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {!imagesLoaded ? (
          <div className="loading">Loading images...</div>
        ) : (
          <motion.div
            className="images-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredImages.map(({ imageUrl }, index) => (
              <motion.img
                key={index}
                src={imageUrl}
                alt={`${activeCategory} ${index + 1}`}
                onClick={() => setSelectedImage(imageUrl)}
                className="latestwork-image"
                variants={itemVariants}
                loading="lazy"
              />
            ))}
          </motion.div>
        )}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedImage} alt="Selected work" />
                <a
                  href="https://www.instagram.com/hariventapalli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  <FaInstagram /> Follow on Instagram
                </a>
                <button
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="package-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/9493078753"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon whatsapp"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.instagram.com/hariventapalli/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon instagram"
            title="View on Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default LatestWork;
