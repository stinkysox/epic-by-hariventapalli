import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sowmya Reddy",
    quote:
      "Epic by Hari Ventapalli captured every ritual of our Telugu wedding with such beauty. The mangalasnanam and jeelakarra bellam moments are etched forever!",
  },
  {
    name: "Ravi Teja",
    quote:
      "Their frames spoke the language of rhythm and grace. Hari Ventapalli truly honored the spirit of my performance!",
  },
  {
    name: "Rajeshwari Devi",
    quote:
      "The cradle ceremony for our grandson was so naturally and beautifully shot. Every moment feels priceless, thanks to Epic by Hari Ventapalli.",
  },
  {
    name: "Pradeep Kumar",
    quote:
      "From pellikuthuru to reception, every emotion was captured so honestly. Epic by Hari Ventapalli made our memories come alive.",
  },
  {
    name: "Sandhya Manohar",
    quote:
      "Working with Hari Ventapalli was smooth and fun. He understood my vision and brought out stunning frames!",
  },
  {
    name: "Dr. Padmaja Rao",
    quote:
      "I got teary-eyed seeing my daughter’s wedding pictures. Every candid shot felt like a painting — all thanks to Hari Ventapalli.",
  },
  {
    name: "Harsha Vardhan",
    quote:
      "During our Carnatic ensemble at Vizag, Epic by Hari Ventapalli was invisible yet everywhere. So much soul in every photo.",
  },
  {
    name: "Bhavani Lakshman",
    quote:
      "He knows how to bring out the heart of Telugu traditions in his work. Our clients always ask for Epic by Hari Ventapalli!",
  },
  {
    name: "Divya Sree",
    quote:
      "My maternity shoot by the Godavari felt dreamy. Hari Ventapalli made the whole process so comfortable and elegant.",
  },
  {
    name: "Srikanth Raju",
    quote:
      "Our daughter’s naamkaranam was captured so well — even the small glances and smiles were preserved beautifully by Epic by Hari Ventapalli.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Testimonials = () => {
  const testimonialWelcomePackage = {
    backgroundImage: "https://i.postimg.cc/jS7tW5Yn/IMG-2238.jpg",
    title: "See what our clients say",
    subtitle: "Testimonials",
    showWelcome: true,
  };

  return (
    <>
      <Navbar welcomeConfig={testimonialWelcomePackage} />
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Clients Say</h2>

          {/* New Description Section */}
          <div className="testimonials-description">
            <p>
              At LivYoung Photography, we capture more than just moments — we
              tell your unique story through every frame. Our passion for
              detail, understanding of culture, and commitment to quality
              ensures that your special occasions are immortalized with artistry
              and care. Whether it's a wedding, cultural event, or personal
              milestone, trust LivYoung to deliver timeless memories with warmth
              and professionalism.
            </p>

            <motion.img
              src="https://i.postimg.cc/NjVgmQD1/Whats-App-Image-2025-06-08-at-7-19-24-PM.jpg"
              alt="Animated Logo"
              className="animated-logo"
              animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Testimonials Grid */}
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                className="testimonial-card"
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">"{testimonial.quote}"</p>

                {/* Star rating */}
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <div className="testimonial-user">
                  <div>
                    <h4 className="user-name">{testimonial.name}</h4>
                    <p className="user-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Testimonials;
