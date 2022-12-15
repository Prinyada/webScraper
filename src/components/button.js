import React from 'react';
import { BUTTON_TYPES } from '../data/button';
import "./button.css";

const button = (props) => {
    const {type, buttonText} = props;

    const getButtonClass = () => {
        switch(type){
            case BUTTON_TYPES.PRIMARY:
                return "primaryBtn button";
            case BUTTON_TYPES.SECONDARY:
                return "secondaryBtn button";
            default:
                return "otherBtn button"
        }
    }
    return (
        <div className={`${getButtonClass()}`}>{buttonText}</div>
    )
}

export default button;