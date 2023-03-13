import React, { useEffect, useState } from "react";
import "./SecondHand.css";
import mainLogo from "../logo.png";
import ImageSlider from "../components/ImageSlider";
import { Input, Space, Select } from "antd";
import { useNavigate } from 'react-router-dom';
import Pagination from "../components/Pagination";

function SecondHand(props) {
  console.log("this props", props);
  let data = props.dataSecond;
  let size = Object.keys(props.dataSecond).length;
  console.log("this lenght -> ",size);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPage ] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex,lastPostIndex)
  return (
    <div className="second-container">
      <div className="second-header">
        <p className="header-1">ประกาศซื้อ-ขาย</p>
      </div>
      <div className="second-header2">
        <div className="second-search-left">
          <Search
            style={{
              width: 400,
              fontSize: 16,
              fontFamily: "",
              marginBottom: 10,
            }}
            placeholder="กรอกคำที่ต้องการค้นหา"
            allowClear
            enterButton="ค้นหา"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="second-flitter-right">
          <Select
            defaultValue="ตัวกรอง"
            style={{ width: 150 }}
            onChange={(value) => {
              // setFliter(value);
            }}
            size="large"
            options={[
              { value: "apartment_condo", label: "อพาร์ทเม้นท์/คอนโด" },
              { value: "bag_wallet", label: "กระเป๋า" },
              { value: "card_ticket", label: "บัตร" },
              { value: "clothing", label: "เสื้อผ้า" },
              { value: "key", label: "กุญแจ" },
              { value: "notebook_pc", label: "โน๊ตบุ๊ค" },
              { value: "pet", label: "สัตว์เลี้ยง" },
              { value: "phone", label: "โทรศัพท์" },
              { value: "watch", label: "นาฬิกา" },
            ]}
          />
        </div>
        <div className="second-flitter-right3">
          <Select
            defaultValue="เรียงวันที่"
            style={{ width: 150 }}
            onChange={(value) => {}}
            size="large"
            options={[
              { value: "apartment_condo", label: "เก่าสุด-ใหม่สุด" },
              { value: "bag_wallet", label: "ใหม่สุด-เก่าสุด" },
            ]}
          />
        </div>
      </div>
      {/* {<DataContent data={data}/>} */}
      <div className="second-content">
        {currentPosts.map((data, index) => {
            let day = new Date(data.detailPost.date_time);
            let im = data.detailPost.image;
            let text = data.detailPost.text;
            console.log("this data => ",data);
            // console.log(data.category);
          return (
            <div key={index} className="second">
              <div className="second-1">
                <div className="second1-type">ซื้อ-ขาย</div>
                <div className="second1-date">
                    <p>{day.getDate()}/{day.getMonth()+1}/{day.getFullYear()+543}</p>
                </div>
              </div>
              <div className="second-2">
                <div className="second2-category">{data.detailPost.category}</div>
                <div className="second2-userfacebook">
                    <p>ผู้โพสต์ : {data.detailPost.username}</p>
                </div>
              </div>
              <div className="second-3">
                <div className="second3-left">
                  <ImageSlider slides={data.detailPost.image}/>
                  {/* <img src={mainLogo} className="ex-picture"/> */}
                </div>
                <div className="second3-right">
                  <div className="second3-right-top">
                    <p style={{display: "flex"}}>สถานที่ : {data.detailPost.place}</p>
                    <p style={{display: "flex"}}>ลักษณะ : {data.detailPost.describe}</p>
                    {/* <p style={{display: "block"}}></p> */}
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
        <Pagination totalPosts={size} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
        {/* <DataContent/> */}
      </div>
    </div>
  );
}

export default SecondHand;
