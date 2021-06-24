import "../scss/components/Card.scss";

import sampleImage from "../assets/sample.jpg";

const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`cardContainer ${props.className}`}
      key={props.key}
      ref={props.revealRef}
    >
      <img ref={props.ref} className="img" src={sampleImage} alt="" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
