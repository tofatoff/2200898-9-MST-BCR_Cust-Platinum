import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import HeaderNav from "../../../components/Navbar";
import SearchBar from "../SearchBar";
import { useSearchParams } from "react-router-dom";
import { Container } from "reactstrap";
import axios from "axios";
import CardSearchResult from "./cards";

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultData, setResultData] = useState([]);
  const name = searchParams.get("name");
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const isRented = searchParams.get("isRented");

  const fetchAsync = async () => {
    const response = await fetch(
      API_URL +
        "?" +
        `name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&isRented=${isRented}`
    );
    const json = await response.json();
    console.log(
      API_URL +
        "?" +
        `name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&isRented=${isRented}`
    );
    setResultData(json.cars);
  };

  const generateCard = (car) => {
    return (
      <CardSearchResult
        key={car.id}
        name={car.name}
        img={car.image}
        price={car.price}
        id={car.id}
      />
    );
  };

  useEffect(() => {
    fetchAsync();
  }, []);

  return (
    <>
      <HeaderNav />
      <div style={{ backgroundColor: "rgb(241, 243, 255)", height: 100 }}></div>
      <SearchBar editButton={true} />
      <Container className="d-flex flex-wrap justify-content-center">
        {resultData.length > 0
          ? resultData.map((car) => generateCard(car))
          : `No car available. Change the filter and refresh the page`}
      </Container>
      <Footer />
    </>
  );
};

export default SearchResult;
