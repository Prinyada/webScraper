import React, { useEffect } from "react";
import { useState } from "react";
import "./LostItems.css";
import mainLogo from "../logo.png";
import ImageSlider from "../components/ImageSlider";
import { Input, Space, Select } from "antd";
import { width } from "@mui/system";
import showDataLost from "../components/ShowDataLost";
import { useNavigate } from 'react-router-dom';
import DataContent from "../components/DataContent";
import Pagination from "../components/Pagination";

function LostItems(props) {
  let data = props.dataLost;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [fliter, setFliter] = useState("");

  const navigate = useNavigate();
  // function showDt(){
  //   navigate("");
  // }
  let size = Object.keys(props.dataLost).length;
  console.log("this size -> ",size);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPage ] = useState(8);
  // const [ currentPosts, setCurrentPosts ] = useState();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex,lastPostIndex)

  return (
    <div className="lost-container">
      <div className="lost-header">
        <p className="header-1">ของหาย</p>
      </div>
      <div className="lost-header2">
        <div className="lost-search-left">
          <Search
            style={{
              width: 400,
              fontSize: 16,
              fontFamily: "Prompt",
              marginBottom: 10,
            }}
            placeholder="กรอกคำที่ต้องการค้นหา"
            allowClear
            enterButton="ค้นหา"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="lost-flitter-right">
          <Select
            defaultValue="ตัวกรอง"
            style={{ width: 150 }}
            onChange={(value) => {
              setFliter(value);
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
        <div className="lost-flitter-right3">
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
      <div className="lost-content">
        {currentPosts.map((data, index) => {
            let day = new Date(data.detailPost.date_time);
            let im = data.detailPost.image;
            let text = data.detailPost.text;
            console.log("this data => ",data);
          return (
            <div key={index} className="lost">
              <div className="lost-1">
                <div className="lost1-type">ของหาย</div>
                <div className="lost1-date">
                    <p>{day.getDate()}/{day.getMonth()+1}/{day.getFullYear()+543}</p>
                </div>
              </div>
              <div className="lost-2">
                <div className="lost2-category">{data.detailPost.category}</div>
                <div className="lost2-userfacebook">
                    <p>ผู้โพสต์ : {data.detailPost.username}</p>
                </div>
              </div>
              <div className="lost-3">
                <div className="lost3-left">
                  <ImageSlider slides={data.detailPost.image}/>
                </div>
                <div className="lost3-right">
                  <div className="lost3-right-top">
                    <p style={{display: "flex"}}>สถานที่หาย : {data.detailPost.place}</p>
                    <p style={{display: "flex"}}>ลักษณะ : {data.detailPost.describe}</p>
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
        <Pagination totalPosts={size} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}

export default LostItems;
