import React from "react";
import HeaderNav from "../../components/Navbar/index";
import Hero from "../../components/Hero";
import SearchBar from "../../components/Detail/SearchBar";
import Footer from "../../components/Footer";

const Search = () => {
  return (
    <div>
      <header>
        <HeaderNav />
      </header>
      <main>
        <Hero showBtnCTA="" />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
};

export default Search;
