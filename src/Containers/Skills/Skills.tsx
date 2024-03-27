import "./Skills.scss";
import { motion } from "framer-motion";
import { skills, experiences } from "../../constants/data";
import ButtonEffect from "../../utils/ButtonEffect";

function Skills() {
  return (
    <div className="skills__container">
      
      <h2 className="head-text">
        Skills & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              // whileInView={{ opacity: [0, 1] }}
              // transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <ButtonEffect>
                <div className="app__flex">
                  <img src={skill.icon} alt="skiils__img" />
                </div>
              </ButtonEffect>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
