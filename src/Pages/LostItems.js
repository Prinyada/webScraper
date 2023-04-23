import React, { useEffect, useState, useContext } from "react";
import "./LostItems.css";
import { Input, Space, Select } from "antd";
import Pagination from "../components/Pagination";
import ShowDataLost from "../components/ShowDataLost";
import { AuthContext } from "../App";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function LostItems(props) {

  const { checkBox, setCheckBox } = useContext(AuthContext);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  let data = props.dataLost;

  let dataArray = [];

  data.map((data, index) => {
    dataArray.push(data);
  });

  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [sortText, setSortText] = useState("");

  //---------- Pagination --------------------//
  let size = dataArray.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPage] = useState(8);
  let lastPostIndex = currentPage * postsPerPage;
  let firstPostIndex = lastPostIndex - postsPerPage;
  let currentPosts = dataArray.slice(firstPostIndex, lastPostIndex);

  let filterData = [];
  let searchData = [];

  let stateFilter = false;
  let stateSearch = false;
  let stateSort = false;

  function search() {
    if (stateFilter === true || stateSort === true) {
      searchData = currentPosts.filter((d) => {
        if (
          d.detailPost.place.includes(searchText) ||
          d.detailPost.describe.includes(searchText)
        ) {
          return d;
        }
      });
      size = searchData.length;
      if (size !== 0) {
        if (searchData[firstPostIndex] === undefined) {
          setCurrentPage(1);
          lastPostIndex = currentPage * postsPerPage;
          firstPostIndex = lastPostIndex - postsPerPage;
        }
      }
      currentPosts = searchData.slice(firstPostIndex, lastPostIndex);
      stateSearch = true;
      return true;
    } else {
      searchData = dataArray.filter((d) => {
        if (
          d.detailPost.place.includes(searchText) ||
          d.detailPost.describe.includes(searchText)
        ) {
          return d;
        }
      });
      size = searchData.length;
      if (size !== 0) {
        if (searchData[firstPostIndex] === undefined) {
          setCurrentPage(1);
          lastPostIndex = currentPage * postsPerPage;
          firstPostIndex = lastPostIndex - postsPerPage;
        }
      }
      currentPosts = searchData.slice(firstPostIndex, lastPostIndex);
      stateSearch = true;
      return true;
    }
  }

  function filter() {
    if (stateSearch === true || stateSort === true) {
      filterData = currentPosts.filter((d) => {
        if (d.detailPost.category.includes(filterText)) {
          return d;
        }
      });
      size = filterData.length;
      if (size !== 0) {
        if (filterData[firstPostIndex] === undefined) {
          setCurrentPage(1);
          lastPostIndex = currentPage * postsPerPage;
          firstPostIndex = lastPostIndex - postsPerPage;
        }
      }
      currentPosts = filterData.slice(firstPostIndex, lastPostIndex);
      stateFilter = true;
      return true;
    } else {
      filterData = dataArray.filter((d) => {
        if (d.detailPost.category.includes(filterText)) {
          return d;
        }
      });
      size = filterData.length;
      if (size !== 0) {
        if (filterData[firstPostIndex] === undefined) {
          setCurrentPage(1);
          lastPostIndex = currentPage * postsPerPage;
          firstPostIndex = lastPostIndex - postsPerPage;
        }
      }
      currentPosts = filterData.slice(firstPostIndex, lastPostIndex);
      stateFilter = true;
      return true;
    }
  }

  function sortDate() {
    if (stateFilter === true) {
      if (sortText === "oldToNew") {
        const sortByDate = (filterData) => {
          const sorter = (a, b) => {
            return (
              new Date(a.detailPost.date_time).getTime() -
              new Date(b.detailPost.date_time).getTime()
            );
          };
          filterData.sort(sorter);
        };
        sortByDate(filterData);
        currentPosts = filterData.slice(firstPostIndex, lastPostIndex);
        stateSort = true;
        return true;
      } else if (sortText === "newToOld") {
        const sortByDate = (filterData) => {
          const sorter = (a, b) => {
            return (
              new Date(b.detailPost.date_time).getTime() -
              new Date(a.detailPost.date_time).getTime()
            );
          };
          filterData.sort(sorter);
        };
        sortByDate(filterData);
        currentPosts = filterData.slice(firstPostIndex, lastPostIndex);
        stateSort = true;
        return true;
      }
    } else if (stateSearch === true) {
      if (sortText === "oldToNew") {
        const sortByDate = (searchData) => {
          const sorter = (a, b) => {
            return (
              new Date(a.detailPost.date_time).getTime() -
              new Date(b.detailPost.date_time).getTime()
            );
          };
          searchData.sort(sorter);
        };
        sortByDate(searchData);
        currentPosts = searchData.slice(firstPostIndex, lastPostIndex);
        stateSort = true;
        return true;
      } else if (sortText === "newToOld") {
        const sortByDate = (searchData) => {
          const sorter = (a, b) => {
            return (
              new Date(b.detailPost.date_time).getTime() -
              new Date(a.detailPost.date_time).getTime()
            );
          };
          searchData.sort(sorter);
        };
        sortByDate(searchData);
        currentPosts = searchData.slice(firstPostIndex, lastPostIndex);
        stateSort = true;
        return true;
      }
    } else {
      if (sortText === "oldToNew") {
        const sortByDate = (dataArray) => {
          const sorter = (a, b) => {
            return (
              new Date(a.detailPost.date_time).getTime() -
              new Date(b.detailPost.date_time).getTime()
            );
          };
          dataArray.sort(sorter);
        };
        sortByDate(dataArray);
        currentPosts = dataArray.slice(firstPostIndex, lastPostIndex);
        stateSort = true;
        return true;
      } else if (sortText === "newToOld") {
        const sortByDate = (dataArray) => {
          const sorter = (a, b) => {
            return (
              new Date(b.detailPost.date_time).getTime() -
              new Date(a.detailPost.date_time).getTime()
            );
          };
          dataArray.sort(sorter);
        };
        sortByDate(dataArray);
        currentPosts = dataArray.slice(firstPostIndex, lastPostIndex);
        stateSort = true;
        return true;
      }
    }
  }

  function checkSelectandSearch() {
    if (
      searchText !== "" ||
      (filterText !== "all" && filterText !== "") ||
      (sortText !== "default" && sortText !== "")
    ) {
      if (searchText !== "") {
        search();
        if (filterText !== "all" && filterText !== "") {
          filter();
          if (sortText !== "default" && sortText !== "") {
            sortDate();
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          } else {
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          }
        } else if (sortText !== "default" && sortText !== "") {
          sortDate();
          if (filterText !== "all" && filterText !== "") {
            filter();
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          } else {
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          }
        } else {
          return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
        }
      } else if (filterText !== "all" && filterText !== "") {
        filter();
        if (searchText !== "") {
          search();
          if (sortText !== "default" && sortText !== "") {
            sortDate();
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          } else {
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          }
        } else if (sortText !== "default" && sortText !== "") {
          sortDate();
          if (searchText !== "") {
            search();
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          } else {
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          }
        } else {
          return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
        }
      } else if (sortText !== "default" && sortText !== "") {
        sortDate();
        if (filterText !== "all" && filterText !== "") {
          filter();
          if (searchText !== "") {
            search();
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          } else {
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          }
        } else if (searchText !== "") {
          search();
          if (filterText !== "all" && filterText !== "") {
            filter();
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          } else {
            return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
          }
        } else {
          return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
        }
      }
    } else {
      return <ShowDataLost currentPosts={currentPosts}></ShowDataLost>;
    }
  }

  useEffect(() => {
    if(checkBox === false){
      dispatch({ type: "ADMIN", payload: false });
      navigate("/");
    }
  }, []);

  return (
    <div className="lost-container">
      <div className="lost-header">
        <p className="header-1">ของหาย</p>
      </div>
      <div className="lost-header2">
        <div className="lost-search-left">
          <Input
            className="searchText"
            placeholder="สถานที่/ลักษณะ"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="lost-filtter-right">
          <Select
            defaultValue="เลือกประเภท"
            className="select-type"
            onChange={(value) => {
              setFilterText(value);
            }}
            options={[
              { value: "all", label: "ทั้งหมด" },
              { value: "acessories", label: "อุปกรณ์เสริม" },
              { value: "bag_wallet", label: "กระเป๋า" },
              { value: "card_ticket", label: "บัตร/ตั๋ว" },
              { value: "clothing", label: "เสื้อผ้า" },
              { value: "decoration", label: "เครื่องประดับ" },
              { value: "education", label: "การศึกษา" },
              { value: "key", label: "กุญแจ/คีย์การ์ด" },
              { value: "notebook_pc", label: "คอมพิวเตอร์" },
              { value: "pet", label: "สัตว์เลี้ยง" },
              { value: "phone", label: "โทรศัพท์" },
              { value: "stuff", label: "ของใช้ภายในบ้าน" },
              { value: "vehicle", label: "ยานพาหนะ" },
              { value: "watch", label: "นาฬิกา" },
            ]}
          />
        </div>
        <div className="lost-filtter-right3">
          <Select
            defaultValue="เรียงวันที่"
            className="select-type"
            onChange={(value) => {
              setSortText(value);
            }}
            options={[
              { value: "oldToNew", label: "เก่าสุด-ใหม่สุด" },
              { value: "newToOld", label: "ใหม่สุด-เก่าสุด" },
            ]}
          />
        </div>
      </div>
      <div className="lost-content">
        {checkSelectandSearch()}
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
