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

function LostItems(props) {
  //   console.log("this props", props);
  let data = props.dataLost;
  // console.log("this data",data);
  // const [ currentIndex, setCurrentIndex ] = useState(0);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [fliter, setFliter] = useState("");

  const navigate = useNavigate();
  // function showDt(){
  //   navigate("");
  // }
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
        <DataContent/>
      </div>
    </div>
  );
}

export default LostItems;
