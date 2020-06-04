import React from "react";

export default function OneCard(props) {
  return (
    <div className="oneCard">
      <h3>Section:{props.card.sec}</h3>
      <p>Chapter Name:{props.card.name}</p>
      <p>time needed:{props.card.time} minutes</p>
      <p>Number of Lessons:{props.card.lessons}</p>
    </div>
  );
}
