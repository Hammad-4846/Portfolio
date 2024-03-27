import InfiniteScroll from "../../Components/Scroll__Container/InfiniteScroll";

import { testimonialData } from "../../constants/data";
import "./Testimonial.scss";

function Testimonial() {
  return (
    <div className="Testimonial__Container">
      <h1 className="head-text">
        Words of <span>Recommendations</span> <br /> For Me
      </h1>
      <InfiniteScroll data={testimonialData} direction="left" speed="slow" />
    </div>
  );
}

export default Testimonial;
