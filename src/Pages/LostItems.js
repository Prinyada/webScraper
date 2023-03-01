import React, { useEffect } from "react";
import { useState } from "react";
import "./LostItems.css";
import mainLogo from "../logo.png";

function LostItems(props) {
//   console.log("this props", props);
  let data = props.dataLost;
  // console.log("this data",data);

  return (
    <div className="lost-container">
      <div className="lost-header">
        <p className="header-1">ของหาย</p>
      </div>
      <div className="lost-content">
        {data.map((data, index) => {
            let day = new Date(data.day);
            console.log("this day -> ",day);
          return (
            <div className="lost">
              <div className="lost-1">
                <div className="lost1-type">ของหาย</div>
                <div className="lost1-date">
                    <p key={index}>{day.getDate()}/{day.getMonth()}/{day.getFullYear()}</p>
                </div>
              </div>
              <div className="lost-2">
                <div className="lost2-category">ชนิด</div>
                <div className="lost2-userfacebook">
                    <p key={index}>Facebook : {data.detailPost.username}</p>
                </div>
              </div>
              <div className="lost-3">
                <div className="lost3-left">
                  <img src={mainLogo} className="ex-picture" />
                </div>
                <div className="lost3-right">
                  <div className="lost3-right-top">
                    <p>สถานที่หาย :</p>
                    <p>ลักษณะ :</p>
                  </div>
                  <div className="lost3-right-buttom">
                  <button class="button-80" role="button">
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

export default LostItems;
