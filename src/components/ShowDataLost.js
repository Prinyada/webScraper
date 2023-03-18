import React from "react";
import ImageSlider from "./ImageSlider";
import './ShowDataLost.css';

function ShowDataLost({currentPosts}) {
  return (
    <>
      {
        currentPosts.map((data, index) => {
          let day = new Date(data.detailPost.date_time);
          return (
            <div key={index} className="lost">
              <div className="lost-1">
                <div className="lost1-type">ของหาย</div>
                <div className="lost1-date">
                  <p>
                    {day.getDate()}/{day.getMonth() + 1}/
                    {day.getFullYear() + 543}
                  </p>
                </div>
              </div>
              <div className="lost-2">
                <div className="lost2-category">ประเภท : {data.detailPost.category}</div>
                <div className="lost2-userfacebook">
                  <p>ผู้โพสต์ : {data.detailPost.username}</p>
                </div>
              </div>
              <div className="lost-3">
                <div className="lost3-left">
                  <ImageSlider slides={data.detailPost.image} />
                </div>
                <div className="lost3-right">
                  <div className="lost3-right-top">
                    <p style={{ display: "flex" }}>
                      สถานที่หาย : {data.detailPost.place}
                    </p>
                    <p style={{ display: "flex" }}>
                      ลักษณะ : {data.detailPost.describe}
                    </p>
                  </div>
                  <div className="lost3-right-buttom">
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

export default ShowDataLost;
