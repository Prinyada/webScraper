import React, { useEffect } from "react";
import { useState } from "react";
import './LostItems.css';
import mainLogo from "../logo.png";


function LostItems(props) {
    console.log("this props",props);
    let data = props.dataLost;
    // console.log("this data",data);

    

    useEffect(() => {
        data.map((data, i) => {
            console.log("this data",data.day);
            // console.log("this day -> ",data[i].day);
            // console.log("this month -> ",data[i].month);
            // console.log("this detailPost -> ",data[i].detailPost);
            // console.log("this year -> ",data[i].year);
            console.log("------------------------------");
        })
    }, [])

    return(
        <div className="lost-container">
            <div className="lost-header">
                <p className="header-1">ของหาย</p>
            </div>
            <div className="lost-content">
                <div className="lost">
                    <div className="lost-1">
                        <div className="lost1-type">
                            ของหาย
                        </div>
                        <div className="lost1-date">
                            วัน/เดือน/ปี
                        </div>
                    </div>
                    <div className="lost-2">
                        <div className="lost2-category">
                            ชนิด
                        </div>
                        <div className="lost2-userfacebook">
                            คนโพสต์
                        </div>
                    </div>
                    <div className="lost-3">
                        <div className="lost3-left">
                            <img src={mainLogo} className="ex-picture"/>
                        </div>
                        <div className="lost3-right">
                            <div className="lost3-right-top">
                                <p>สถานที่หาย :</p>
                                <p>ลักษณะ :</p>
                            </div>
                            <div className="lost3-right-buttom">
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* { data.map( (data,index) => {
                    return (
                        <div className="lost">

                        </div>
                        // <p key={index}>{data.day}</p>

                    )
                })} */}
            </div>
            
        </div>
    )

}

export default LostItems;
