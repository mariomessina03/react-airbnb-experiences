import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import React from "react";
import data from "./data";

export default function App() {
  const cards = data.map((singleData) => {
    return <Card key={singleData.id} singleData={singleData} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
