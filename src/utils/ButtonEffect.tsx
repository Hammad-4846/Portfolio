import gsap from "gsap";
import React, { useEffect } from "react";

function ButtonEffect({ children }: { children: any }) {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    // const mouseMove = (e: React.MouseEvent) => {
    //   const { clientX, clientY } = e;
    //   const rect = ref.current?.getBoundingClientRect();
    //   const { width, height, left, top } = rect!;
    //   const x = clientX - (left + width / 2);
    //   const y = clientY - (top + height / 2);
    //   xTo(x);
    //   yTo(y);
    // };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    ref.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const rect = ref.current?.getBoundingClientRect();
      const { width, height, left, top } = rect!;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });
    ref.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        const { width, height, left, top } = rect!;
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      });
      ref.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return React.cloneElement(children, { ref });
}

export default ButtonEffect;
