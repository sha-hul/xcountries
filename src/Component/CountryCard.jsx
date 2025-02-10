import React from "react";
import "../CSS/cards.css";

const CountryCard = (props) => {
  return (
    
      <div className="cardcountry">
        <img
          src={props.country.flag}
          alt={props.country.name}
          width="150"
          height="150"
        />
        <h4>{props.country.name}</h4>
      </div>
        );
};

export default CountryCard;
