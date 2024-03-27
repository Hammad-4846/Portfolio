import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import "./Card.scss"

export interface CardProps {
  name: string;
  imgUrl: string;
  index: string;
  projectLink: string;
  title: string;
  description: string;
  codeLink: string;
}

function Card({
  imgUrl,
  index,
  projectLink,
  title,
  description,
  name,
  codeLink,
}: CardProps) {
  return (
    <div className="app__work-item app__flex" key={index}>
      <div className="app__work-img app__flex">
        <img src={imgUrl} alt={name} />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <a href={projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="app__work-content app__flex">
        <h4 className="bold-text">{title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
