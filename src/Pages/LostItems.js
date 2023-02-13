import React from "react";
import { useState } from "react";
import './LostItems.css';


function LostItems(props) {
    let data = props.dataLost;

    // console.log("this data -> ",data);
    
    return(
        <div className="lost-container">
            <div className="lost-header">
                <p className="header-1">ของหาย</p>
            </div>
            <div>
                ข้อความ
            </div>
        </div>
    )

}

export default LostItems;
