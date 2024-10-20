import React from "react";
import star from "../images/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.singleData.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.singleData.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`../public/card-imgs/${props.singleData.coverImg}`}
        className="card-image"
      ></img>
      <div className="card-stats">
        <img src={star} className="card-star"></img>
        <span>{props.singleData.stats.rating}</span>
        <span className="gray">
          ({props.singleData.stats.reviewCount}) •&nbsp;
        </span>
        <span className="gray">{props.singleData.location}</span>
      </div>
      <h2 className="card-title">{props.singleData.title}</h2>
      <p>
        <span className="bold card-price">From ${props.singleData.price}</span>{" "}
        / person
      </p>
    </div>
  );
}
