import React from "react";
import image from "../images/Group77.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={image} alt="" className="hero-image" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
