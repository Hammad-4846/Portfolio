import  { useRef } from "react";
import Card, { CardProps } from "../Card/Card";

import "./HorizontalScrollCarousel.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalScrollCarousel({ CardData }: { CardData: CardProps[] }) {
  const targetRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section className="horizontal-carousel" ref={targetRef}>
      <div className="sticky-div" >
        <motion.div style={{ x, display : "flex", gap : "1rem", zIndex : "6", position : "relative" }} className="card__component" >
          {CardData.map((cardItem, key) => (
            <Card
              codeLink={cardItem.codeLink}
              description={cardItem.description}
              name={cardItem.name}
              projectLink={cardItem.projectLink}
              imgUrl={cardItem.imgUrl}
              index={cardItem.index}
              title={cardItem.title}
              key={key}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HorizontalScrollCarousel;
