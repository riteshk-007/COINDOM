import React from "react";
import "./Home.scss";
import Hero from "../../components/HeroBanner/Hero";
import Market from "../../components/Market/Market";
import Choose from "../../components/Choose/Choose";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Market />
      <Choose />
    </div>
  );
}

export default Home;
