import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { BiDownArrowAlt } from "react-icons/bi";

import "./Hero.scss";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const COLORS = ["#1E67C6", "#13FFAA", "#CE84CF", "#DD335C"];

function Hero() {
  const color = useMotionValue(COLORS[3]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%, ${color})`;
  const boxShadow = useMotionTemplate`0 4px 24px ${color}`;
  const border = useMotionTemplate`1px solid ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="hero__container"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <motion.div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h2 className="head-text">Hammad</h2>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__title-info"
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>
          Transforming visions into pixel-perfect reality, <br /> one line of
          code at a time
        </h1>

        <motion.h3>Am I Good Fit For Your Organization ? </motion.h3>
        <motion.a
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          href="#about"
          rel="noreferrer"
          style={{ boxShadow: boxShadow, border: border }}
        >
          Explore It <BiDownArrowAlt />
        </motion.a>
      </motion.div>

      <div className="header__background-stars">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}

export default Hero;
