import { Canvas } from "@react-three/fiber";
import "./about.scss";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";

import images from "../../assets/index";
import splitString from "../../utils/splitText";

function About() {
  const aboutText: string = `I'm a dedicated web developer with a strong passion for creating innovative web solutions. As a MERN Stack Developer. My experience in designing and developing diverse web applications, combined with a commitment to constant learning, has shaped me into a versatile and driven professional.
  Currently, I am a pre-final student at DTU, where I continue to expand my knowledge and refine my skills in the dynamic field of web development.`;

  const splitedText = splitString(aboutText);

  const charVaraints = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <main className="about__container">
      <div className="about__heading head-text">
        <h3>
          Embark on a <span>Journey</span> of Ingenuity
          <br /> The World of 
          <span> Hammad</span>
        </h3>
      </div>

      <div className="background__stars">
        <Canvas>
          <Stars
            radius={200}
            depth={50}
            count={2500}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      <div className="about__info" id="about">
        <div className="info__wrapper">
          <motion.h3
            transition={{ staggerChildren: 0.02 }}
            initial="hidden"
            whileInView="reveal"
          >
            {splitedText.map((char, id) => (
              <motion.span
                key={id}
                transition={{ duration: 0.2 }}
                variants={charVaraints}
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>
        </div>
        <div className="image__wrapper">
          <motion.img
            whileInView={{ scale: [0.8, 1], x: [100, 0] }}
            transition={{ duration: 0.5, type: "spring", stiffness: 125 }}
            src={images.workingMen}
            alt="workingMen"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
