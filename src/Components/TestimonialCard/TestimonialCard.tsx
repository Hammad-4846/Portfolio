
import "./TestimonaiCard.scss"

export interface TestimonaiCardProp {
  name: string;
  description: string;
  owner: string;
}

function TestimonialCard({ name, description, owner }: TestimonaiCardProp) {
  return (
    <div className="TestiMonial_Card">
      <h5>{name}</h5>
      <p>{description}</p>
      <small>{owner}</small>
    </div>
  );
}

export default TestimonialCard;
