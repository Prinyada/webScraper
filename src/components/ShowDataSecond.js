import React from "react";
import './ShowDataSecond.css';
import ImageSlider from "./ImageSlider";

function ShowDataSecond({ currentPosts }) {
  return (
    <>
      {currentPosts.map((data, index) => {
        let day = new Date(data.detailPost.date_time);
        return (
          <div key={index} className="second">
            <div className="second-1">
              <div className="second1-type">ของหาย</div>
              <div className="second1-date">
                <p>
                  {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear() + 543}
                </p>
              </div>
            </div>
            <div className="second-2">
              <div className="second2-category">
                ประเภท : {data.detailPost.category}
              </div>
              <div className="second2-userfacebook">
                <p>ผู้โพสต์ : {data.detailPost.username}</p>
              </div>
            </div>
            <div className="second-3">
              <div className="second3-left">
                <ImageSlider slides={data.detailPost.image} />
              </div>
              <div className="second3-right">
                <div className="second3-right-top">
                  <p style={{ display: "flex" }}>
                    สถานที่ : {data.detailPost.place}
                  </p>
                  <p style={{ display: "flex" }}>
                    ลักษณะ : {data.detailPost.describe}
                  </p>
                </div>
                <div className="second3-right-buttom">
                  <button className="button-80" role="button">
                    <a href={data.detailPost.post_url}>ดูโพสต์</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShowDataSecond;
