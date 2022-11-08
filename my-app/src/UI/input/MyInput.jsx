import React from "react";
import './MyInput.module.css';

const MyInput = (props) => {
    return(
        <input className="myInput" {...props}/>
    );
};

export default MyInput;