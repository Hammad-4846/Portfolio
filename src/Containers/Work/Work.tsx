
import "./Work.scss";
import HorizontalScrollCarousel from "../../Components/HorizontalScrollCarousel/HorizontalScrollCarousel";

import { projects } from "../../constants/data";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function Work() {
  return (
    <div className="app__work-portfolio">
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <HorizontalScrollCarousel CardData={projects} />

      <div className="header__background-stars">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </div>
  );
}

export default Work;
