import React from "react";
import "./ImageSlider.css";
import { useState } from "react";
import axios from "axios";
import mainLogo from "../logo.png";

function ImageSlider(props) {
  let data = props.slides;

  function sendRequest(img) {
    console.log("this img -> ",img);
    // axios
    //   .post("http://localhost:5000/post", {
    //     img: img,
    //   })
    //   .then((response) => {
    //     let js = response.config.data;
    //     let newDT = JSON.parse(js);
    //     console.log("this response -> ", newDT.img);
    //     axios.get(img).then((res) => {
    //       console.log(res);
    //     }).catch((error) => {
    //       console.log(error);
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios
    //   .get(img)
    //   .then((res) => {
    //     console.log(res);
    //   }).then((r) => {
    //     console.log(r.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  console.log("--------------------------");

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // sendRequest(slides);
  if (data === undefined) {
    return <div className="imageslider-container">ไม่มีรูปจ้า</div>;
  } else {
    // console.log("this slides -> ",data[0]);

    return (
      <div className="imageslider-container">
        {data.map((img, a) => {
          console.log("this img -> ",img);
          // let y = sendRequest(img);
          // console.log("this y  -> ",y);
          return <img key={a} src={img} style={slideStyles} />;
        })}
      </div>
    );
  }
}

export default ImageSlider;
