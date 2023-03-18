import React, { useEffect, useCallback, useState } from "react";
import "./LostItems.css";
import ImageSlider from "../components/ImageSlider";
import { Input, Space, Select } from "antd";
import Pagination from "../components/Pagination";
import ShowDataLost from "../components/ShowDataLost";

function LostItems(props) {
  let data = props.dataLost;

  let dataArray = [];

  data.map((data, index) => {
    dataArray.push(data);
  });


  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [sortText, setSortText] = useState("");

  //---------- Pagination --------------------//
  let size = dataArray.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  let currentPosts = dataArray.slice(firstPostIndex, lastPostIndex);


  function search() {
    let searchData = dataArray.filter((d) => {
      if (
        d.detailPost.place.includes(searchText) ||
        d.detailPost.describe.includes(searchText)
      ) {
        return d;
      }
    });
    size = searchData.length;
    currentPosts = searchData.slice(firstPostIndex, lastPostIndex);
    return true;
  }

  function filter() {
    let filterData = dataArray.filter((d) => {
      if (d.detailPost.category.includes(filterText)) {
        return d;
      }
    });
    size = filterData.length;
    currentPosts = filterData.slice(firstPostIndex, lastPostIndex);
    return true;
  }

  function sortDate() {
    if (sortText === "oldToNew") {
      const sortByDate = (dataArray) => {
        const sorter = (a, b) => {
          return ( new Date(a.detailPost.date_time).getTime() -new Date(b.detailPost.date_time).getTime() );
        };
        dataArray.sort(sorter);
      };
      sortByDate(dataArray);
      currentPosts = dataArray.slice(firstPostIndex, lastPostIndex);
      return true;
    } else if (sortText === "newToOld") {
      const sortByDate = (dataArray) => {
        const sorter = (a, b) => {
          return ( new Date(b.detailPost.date_time).getTime() - new Date(a.detailPost.date_time).getTime() );
        };
        dataArray.sort(sorter);
      };
      sortByDate(dataArray);
      currentPosts = dataArray.slice(firstPostIndex, lastPostIndex);
      return true;
    }
  }
  useEffect(() => {}, []);

  return (
    <div className="lost-container">
      <div className="lost-header">
        <p className="header-1">ของหาย</p>
      </div>
      <div className="lost-header2">
        <div className="lost-search-left">
          <Input
            style={{
              width: 400,
              fontSize: 16,
              fontFamily: "Prompt",
              marginBottom: 10,
            }}
            placeholder="พิมพ์คำที่ต้องการค้นหา"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="lost-flitter-right">
          <Select
            defaultValue="ทั้งหมด"
            style={{ width: 150 }}
            onChange={(value) => {
              setFilterText(value);
            }}
            options={[
              { value: "all", label: "ทั้งหมด" },
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
            onChange={(value) => {
              setSortText(value);
            }}
            options={
              [
                { value: "oldToNew", label: "เก่าสุด-ใหม่สุด" },
                { value: "newToOld", label: "ใหม่สุด-เก่าสุด" },
              ]
            }
          />
        </div>
      </div>
      <div className="lost-content">
      {searchText !== "" ? (
          search() && (
            <ShowDataLost currentPosts={currentPosts}></ShowDataLost>
          )
        ) : (filterText !== "all" && filterText !== "") ? (
          filter() && (
            <ShowDataLost currentPosts={currentPosts}></ShowDataLost>
          )
        ) : (sortText !== "default" && sortText !== "") ? (
          sortDate() && (
            <ShowDataLost currentPosts={currentPosts}></ShowDataLost>
          )
        ) : (
          <ShowDataLost currentPosts={currentPosts}></ShowDataLost>
        )}
        {
          <Pagination
            totalPosts={size}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        }
      </div>
    </div>
  );
}

export default LostItems;
