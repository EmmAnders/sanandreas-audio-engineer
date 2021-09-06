import "../scss/components/Card.scss";

const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`cardContainer ${props.className}`}
      key={props.cardKey}
    >
      <img src={props.src} alt="" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
