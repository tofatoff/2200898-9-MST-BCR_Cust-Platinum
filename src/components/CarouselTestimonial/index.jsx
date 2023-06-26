import React, { useState } from "react";
import imgPhoto from "../../assets/img_photo.png";
import { BsStarFill } from "react-icons/bs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./styles.module.css";

const RATE_STARS = (rate) => {
  let stars = [];
  for (let i = 1; i <= rate; i++) {
    stars.push(<BsStarFill key={i} color="#F9CC00" />);
  }
  return stars;
};

const REVIEWS = [
  {
    id: 1,
    customer: "John Doe 32, Bromo",
    photo: imgPhoto,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo mollitia dolore laborum distinctio perspiciatis, iste vel totam? Molestias, ratione?",
    rate: 5,
  },
  {
    id: 2,
    customer: "John Dee 32, Bromo",
    photo: imgPhoto,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    rate: 5,
  },
];

const CarouselTestimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === REVIEWS.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? REVIEWS.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel d-flex align-items-center justify-content-center flex-column">
      <div className={styles.container}>
        <div className="d-flex align-items-center">
          <div
            style={{
              marginRight: "46px",
            }}
          >
            <img src={REVIEWS[currentSlide].photo} alt="" />
          </div>
          <div>
            {RATE_STARS(REVIEWS[currentSlide].rate)}
            <p>"{REVIEWS[currentSlide].message}"</p>
            <p>{REVIEWS[currentSlide].customer}</p>
          </div>
        </div>
      </div>
      <div className="d-flex mt-2">
        <button
          onClick={prevSlide}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #C4C4C4",
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#5CB85F")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#5CB85F")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #C4C4C4",
            backgroundColor: "white",

            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselTestimonial;
