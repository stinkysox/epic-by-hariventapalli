import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={1}
      >
        <h2>
          We’re <br />
          <span>Epic By Hari Ventapalli</span>
        </h2>
        <p>
          Epic By Hari Ventapalli is the vision of a passionate storyteller and
          creative artist dedicated to capturing timeless memories with elegance
          and emotion. Hari specializes in turning fleeting moments into lasting
          works of art, blending authenticity with a refined artistic eye to
          create truly unforgettable imagery.
        </p>

        <div className="photographer-image">
          <img
            src="https://i.postimg.cc/K86Xv3Xj/470902702-1290141138696631-9148208628063689575-n.jpg"
            alt="Hari Ventapalli"
          />
        </div>
      </motion.div>

      <motion.div
        className="about-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[2, 3, 4].map((i, idx) => (
          <motion.p key={idx} variants={fadeInUp} custom={i}>
            {
              [
                "At Epic By Hari Ventapalli, I believe that every love story is one of a kind and deserves to be captured with genuine care and creativity. From the first glance to the final goodbye, I document each chapter with an eye for detail and a heart tuned to storytelling.",
                "Whether it’s a grand celebration or an intimate gathering, my approach remains the same — candid, artistic, and deeply personal. I strive to create photographs that not only freeze a moment in time but also echo the emotions that made it meaningful.",
                "Driven by a passion for beauty and a commitment to excellence, I craft visuals that reflect the essence of who you are — vibrant, joyful, and unforgettable.",
              ][idx]
            }
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
