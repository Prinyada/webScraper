import React from "react";
import { useEffect } from "react";
import mainLogo from "../logo.png";
import "./SecondHand.css";

function SecondHand(props) {
  let data = props.dataSecond;
  console.log("this data", data);

  return (
    <div className="second-container">
      <div className="second-header">
        <p className="header-1">ของมือสอง</p>
      </div>
      <div className="second-content">
        {data.map((data, index) => {
          let day = new Date(data.detailPost.date_time);
          let text = data.detailPost.text;
          return (
            <div className="second">
              <div className="second-1">
                <div className="second1-type">ของมือสอง</div>
                <div className="second1-date">
                  <p key={index}>
                    {day.getDate()}/{day.getMonth()}/{day.getFullYear()}
                  </p>
                </div>
              </div>
              <div className="second-2">
                <div className="second2-category">ชนิด</div>
                <div className="second2-userfacebook">
                  <p key={index}>Facebook : {data.detailPost.username}</p>
                </div>
              </div>
              <div className="second-3">
                <div className="second3-left">
                  <img src={mainLogo} className="ex-picture" />
                </div>
                <div className="second3-right">
                  <div className="second3-right-top">
                    <p style={{ display: "flex" }}>สถานที่หาย :</p>
                    <p style={{ display: "flex" }}>
                      ราคา : {data.detailPost.price}
                    </p>
                    {text.map((values, id) => {
                      return <label key={id}>{values}&nbsp;</label>;
                    })}
                  </div>
                  <div className="second3-right-buttom">
                    <button className="button-80" role="button">
                      <a href={data.detailPost.post_url}>ดูโพสต์</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            // <p key={index}>{data.day}</p>
          );
        })}
      </div>
    </div>
  );
}

export default SecondHand;
