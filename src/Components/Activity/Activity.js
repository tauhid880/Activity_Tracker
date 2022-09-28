import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { name, img, age, time } = props.activity;
  return (
    <div className="activity">
      <img src={img} alt="" />
      <p className="font-bold text-xl">{name}</p>
      <p className="font-bold text-base">For Age : {age}</p>
      <p className="font-bold text-base">Time required : {time}</p>
      <button className="btn btn-outline btn-primary">Button</button>
    </div>
  );
};

export default Activity;
