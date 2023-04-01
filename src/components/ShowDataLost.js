import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import "./ShowDataLost.css";
import axios from "axios";
import mainLogo from "../logo.png";

function ShowDataLost({ currentPosts }) {

  function showType(data) {
    let size = data.length;
    console.log(data);
    let tempType = [];
    if (size === 1) {
      data.map((type, index) => {
        if (type === "-") {
          let t = "ไม่ระบุประเภท";
          tempType.push(t);
        } else {
          let ty;
          if (type === "acessories") {
            ty = "อุปกรณ์เสริม";
            tempType.push(ty);
          } else if (type === "apartment_condo") {
            ty = "อพาร์ทเม้นท์/คอนโด";
            tempType.push(ty);
          } else if (type === "decorations") {
            ty = "สร้อย/แหวน/กำไล";
            tempType.push(ty);
          } else if (type === "bag_wallet") {
            ty = "กระเป๋า";
            tempType.push(ty);
          } else if (type === "clothing") {
            ty = "เสื้อผ้า";
            tempType.push(ty);
          } else if (type === "card_ticket") {
            ty = "บัตร";
            tempType.push(ty);
          } else if (type === "education") {
            ty = "การศึกษา";
            tempType.push(ty);
          } else if (type === "key") {
            ty = "กุญแจ";
            tempType.push(ty);
          } else if (type === "notebook_pc") {
            ty = "โน๊ตบุ๊ค";
            tempType.push(ty);
          } else if (type === "pet") {
            ty = "สัตว์เลี้ยง";
            tempType.push(ty);
          } else if (type === "phone") {
            ty = "โทรศัพท์";
            tempType.push(ty);
          } else if (type === "stuff") {
            ty = "ของใช้ภายในบ้าน";
            tempType.push(ty);
          } else if (type === "vehicle") {
            ty = "ยานพาหนะ";
            tempType.push(ty);
          } else if (type === "watch") {
            ty = "นาฬิกา";
            tempType.push(ty);
          }
        }
      });
    } else {
      data.map((type, index) => {
        let ty;
        if (type === "acessories") {
          ty = "อุปกรณ์เสริม";
          tempType.push(ty);
        } else if (type === "apartment_condo") {
          ty = "อพาร์ทเม้นท์/คอนโด";
          tempType.push(ty);
        } else if (type === "decorations") {
          ty = "สร้อย/แหวน/กำไล";
          tempType.push(ty);
        } else if (type === "bag_wallet") {
          ty = "กระเป๋า";
          tempType.push(ty);
        } else if (type === "clothing") {
          ty = "เสื้อผ้า";
          tempType.push(ty);
        } else if (type === "card_ticket") {
          ty = "บัตร";
          tempType.push(ty);
        } else if (type === "education") {
          ty = "การศึกษา";
          tempType.push(ty);
        } else if (type === "key") {
          ty = "กุญแจ";
          tempType.push(ty);
        } else if (type === "notebook_pc") {
          ty = "โน๊ตบุ๊ค";
          tempType.push(ty);
        } else if (type === "pet") {
          ty = "สัตว์เลี้ยง";
          tempType.push(ty);
        } else if (type === "phone") {
          ty = "โทรศัพท์";
          tempType.push(ty);
        } else if (type === "stuff") {
          ty = "ของใช้ภายในบ้าน";
          tempType.push(ty);
        } else if (type === "vehicle") {
          ty = "ยานพาหนะ";
          tempType.push(ty);
        } else if (type === "watch") {
          ty = "นาฬิกา";
          tempType.push(ty);
        }
        tempType.push(",");
      });
      tempType.pop();
    }
    return tempType;
  }

  return (
    <>
      {currentPosts.map((data, index) => {
        let day = new Date(data.detailPost.date_time);
        return (
          <div key={index} className="lost">
            <div className="lost-1">
              <div className="lost1-type">ของหาย</div>
              <div className="lost1-date">
                <p>
                  {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear() + 543}
                </p>
              </div>
            </div>
            <div className="lost-2">
              <div className="lost2-category">
                {showType(data.detailPost.category)}
              </div>
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
