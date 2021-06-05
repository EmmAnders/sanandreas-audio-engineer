import "../scss/components/Card.scss";

import sampleImage from "../assets/sample.png";

const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`cardContainer ${props.className}`}
      key={props.key}
    >
      <img className="img" src={sampleImage} alt="" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
