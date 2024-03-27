import { useEffect, useRef } from "react";
import TestimonialCard, {
  TestimonaiCardProp,
} from "../TestimonialCard/TestimonialCard";
import "./InfiniteScroll.scss";

interface Props {
  data: TestimonaiCardProp[];
  speed?: "fast" | "normal" | "slow";
  direction: "left" | "right";
}

function InfiniteScroll({ data, speed = "normal", direction = "left" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion : reduce)").matches)
      addAnimation();
  }, []);

  const addAnimation = (): void => {
    const scroller = containerRef.current;
    scroller?.setAttribute("data-animated", "true");
    const scrollInner = scroller?.querySelector(".inner__scroller");

    const scrollContent = Array.from(
      scrollInner?.children ? scrollInner?.children : []
    );

    console.log(scrollContent);

    scrollContent.forEach((item) => {
      const duplicateElem = item.cloneNode(true) as Element;
      duplicateElem.setAttribute("aria-hidden", "true");

      scrollInner?.appendChild(duplicateElem);
    });

    getDirection();
    getSpeed();
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div className="scroller"  ref={containerRef}>
      <ul className="flex text-white inner__scroller flex-wrap">
        {data.map((item, index) => (
          <TestimonialCard
            description={item.description}
            name={item.name}
            owner={item.owner}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default InfiniteScroll;
