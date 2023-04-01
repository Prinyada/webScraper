import React from "react";
import './ShowDataSecond.css';
import ImageSlider from "./ImageSlider";

function ShowDataSecond({ currentPosts }) {
  function showType(data) {
    let size = data.length;
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
          <div key={index} className="second">
            <div className="second-1">
              <div className="second1-type">ซื้อ-ขาย</div>
              <div className="second1-date">
                <p>
                  {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear() + 543}
                </p>
              </div>
            </div>
            <div className="second-2">
              <div className="second2-category">
                {showType(data.detailPost.category)}
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
                  <p style={{ display: "flex" }}>
                    ราคา : {data.detailPost.price}
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
