import React from "react";
import "./ShowDataLost.css";
import mainLogo from "../logo.png";

function showDataLost() {
  // console.log("this data -> ",data);
  // let day = new Date(data.detailPost.date_time);
  // let im = data.detailPost.image;
  // let text = data.detailPost.text;
  return (
    <div>
      showData
      {/* <div className="lost-content">
        <div className="lost">
          <div className="lost-1">
            <div className="lost1-type">ของหาย</div>
            <div className="lost1-date">
              <p>
                {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear() + 543}
              </p>
            </div>
          </div>
          <div className="lost-2">
            <div className="lost2-category">ชนิด</div>
            <div className="lost2-userfacebook">
              <p>ผู้โพสต์ : {data.detailPost.username}</p>
            </div>
          </div>
          <div className="lost-3">
            <div className="lost3-left">
              <img src={mainLogo} className="ex-picture" />
            </div>
            <div className="lost3-right">
              <div className="lost3-right-top">
                <p style={{ display: "flex" }}>สถานที่หาย :</p>
                <p style={{ display: "flex" }}>ลักษณะ :</p>
              </div>
              <div className="lost3-right-buttom">
                <button className="button-80" role="button">
                  <a href={data.detailPost.post_url}>ดูโพสต์</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        { <p key={index}>{data.day}</p> }
      </div> */}
    </div>
  );
}

export default showDataLost;
