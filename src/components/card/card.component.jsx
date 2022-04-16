import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props;

    return (
      <div className="card-container" key={id}>
        <img
          className="monster-image"
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className="monster-name">{name}</h2>
        <p className="monster-email">{email}</p>
      </div>
    );
  }
}

export default Card;
