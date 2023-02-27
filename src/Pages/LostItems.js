import React, { useEffect } from "react";
import { useState } from "react";
import './LostItems.css';


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
