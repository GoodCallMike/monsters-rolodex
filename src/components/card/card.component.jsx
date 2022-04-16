import "./card.styles.css";

const Card = ({ id, name, email }) => (
  <div className="card-container" key={id}>
    <img
      className="monster-image"
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=300x300`}
    />
    <h2 className="monster-name">{name}</h2>
    <p className="monster-email">{email}</p>
  </div>
);

export default Card;
