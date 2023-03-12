import React, { useEffect } from "react";
import { useState } from "react";
import "./LostItems.css";
import mainLogo from "../logo.png";
import ImageSlider from "../components/ImageSlider";

function LostItems(props) {
//   console.log("this props", props);
  let data = props.dataLost;
  // console.log("this data",data);
  // const [ currentIndex, setCurrentIndex ] = useState(0);
  return (
    <div className="lost-container">
      <div className="lost-header">
        <p className="header-1">ของหาย</p>
      </div>
      <div className="lost-content">
        {data.map((data, index) => {
            let day = new Date(data.detailPost.date_time);
            let im = data.detailPost.image;
            let text = data.detailPost.text;
            
            // text.map((v,u) => {
            //   console.log("this text -> ",v);
            // })
          return (
            <div key={index} className="lost">
              <div className="lost-1">
                <div className="lost1-type">ของหาย</div>
                <div className="lost1-date">
                    <p>{day.getDate()}/{day.getMonth()+1}/{day.getFullYear()+543}</p>
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
                  <ImageSlider slides={data.detailPost.image}/>
                  {/* <img src={mainLogo} className="ex-picture"/> */}
                </div>
                <div className="lost3-right">
                  <div className="lost3-right-top">
                    <p style={{display: "flex"}}>สถานที่หาย :</p>
                    <p style={{display: "flex"}}>ลักษณะ :</p>
                    {text.map((value,id) => {
                      return (<label key={id}>{value}&nbsp;</label>)
                    })}
                  </div>
                  <div className="lost3-right-buttom">
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

export default LostItems;
