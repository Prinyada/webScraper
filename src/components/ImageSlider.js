import React from "react";
import "./ImageSlider.css";
import { useState } from "react";
import axios from "axios";
import mainLogo from "../logo.png";
import {MdKeyboardArrowLeft} from 'react-icons/md';
import {MdKeyboardArrowRight} from 'react-icons/md';


function ImageSlider(props) {

  let data = props.slides;

  const [currentIndex, setCurrentIndex] = useState(0);

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "0px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "0px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === data?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  if (data === undefined) {
    return <div className="imageslider-container">ไม่มีรูปจ้า</div>;
  } else {
    return (
      <div className="imageslider-container">
        <div style={leftArrowStyles} onClick={goToPrevious}><MdKeyboardArrowLeft/></div>
        <div style={rightArrowStyles} onClick={goToNext}><MdKeyboardArrowRight/></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${data[currentIndex]})`,
          }}
        />
      </div>
    );
  }
}

export default ImageSlider;
