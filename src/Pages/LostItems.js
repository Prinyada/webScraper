import React from "react";
import { useState } from "react";
import './LostItems.css';


function LostItems(props) {
    let data = props.dataLost;

    // console.log("this day -> ",data[0].day);
    // console.log("this month -> ",data[0].month);
    // console.log("this detailPost -> ",data[0].detailPost);
    // console.log("this year -> ",data[0].year);
    
    return(
        <div className="lost-container">
            <div className="lost-header">
                <p className="header-1">ของหาย</p>
            </div>
            <div className="lost-content">
                { data.map((lost,index) => {
                    return (
                        <div className="lost-1">
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default LostItems;
