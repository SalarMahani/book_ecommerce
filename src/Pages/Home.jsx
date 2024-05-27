import React from "react";
import Hero from "../Components/Hero/Hero";
import TranslatedBook from "../Components/TranslatedBook/TranslatedBook";
import OfferHero from "../Components/OfferHero/OfferHero";
import SomeEnglishBook from "../Components/SomeEngilshBook/SomeEnglishBook";
function Home(props) {
  return (
    <div>
      <Hero />
      <TranslatedBook />
      <OfferHero />
      <SomeEnglishBook />
    </div>
  );
}

export default Home;
