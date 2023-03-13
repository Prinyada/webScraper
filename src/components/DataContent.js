import React, { useEffect } from "react";
import "./DataContent.css";
import mainLogo from "../logo.png";

function DataContent(data) {
  // console.log("this datacontent -> ", data.data);
  let dt = data.data;
  console.log("this datacontent -> ", dt);
  useEffect(() => {
    dt.map((d, i) => {
      console.log("this d- >", d);
    });
  }, []);
  // return (
    // <div className="lost-content">
    //   {dt.map((data, i) => {
    //     console.log("this d- >", dt);
    //     let day = new Date(data.detailPost.date_time);
    //     <div className="lost">
    //       <div className="lost-1">
    //         <div className="lost1-type">ของหาย</div>
    //         <div className="lost1-date">
    //           <p>
    //             {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear() + 543}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="lost-2">
    //         <div className="lost2-category">ชนิด</div>
    //         <div className="lost2-userfacebook">
    //           <p>ผู้โพสต์ : {data.detailPost.username}</p>
    //         </div>
    //       </div>
    //       <div className="lost-3">
    //         <div className="lost3-left">
    //           <img src={mainLogo} className="ex-picture" />
    //         </div>
    //         <div className="lost3-right">
    //           <div className="lost3-right-top">
    //             <p style={{ display: "flex" }}>สถานที่หาย :</p>
    //             <p style={{ display: "flex" }}>ลักษณะ :</p>
    //           </div>
    //           <div className="lost3-right-buttom">
    //             <button className="button-80" role="button">
    //               <a href={data.detailPost.post_url}>ดูโพสต์</a>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>;
    //   })}
    // </div>
  // );
  // return (
  //   <div className="lost">

  //     {dt.map((data, index) => {
  //       console.log(data);
  //       let day = new Date(data.detailPost.date_time);
  //       let d = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear() + 543}`
  //       console.log("this day -> ",d);
  //       let im = data.detailPost.image;
  //       let text = data.detailPost.text;
  //       <div className="lost">
  //         <div className="lost-1">
  //           <div className="lost1-type">ของหาย</div>
  //           <div className="lost1-date">
  //             <p>
  //               {day.getDate()}/{day.getMonth() + 1}/{day.getFullYear() + 543}
  //             </p>
  //           </div>
  //         </div>
  //         <div className="lost-2">
  //           <div className="lost2-category">ชนิด</div>
  //           <div className="lost2-userfacebook">
  //             <p>ผู้โพสต์ : {data.detailPost.username}</p>
  //           </div>
  //         </div>
  //         <div className="lost-3">
  //           <div className="lost3-left">
  //             <img src={mainLogo} className="ex-picture" />
  //           </div>
  //           <div className="lost3-right">
  //             <div className="lost3-right-top">
  //               <p style={{ display: "flex" }}>สถานที่หาย :</p>
  //               <p style={{ display: "flex" }}>ลักษณะ :</p>
  //             </div>
  //             <div className="lost3-right-buttom">
  //               <button className="button-80" role="button">
  //                 <a href={data.detailPost.post_url}>ดูโพสต์</a>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     })}
  //   </div>
  // );
}

export default DataContent;
