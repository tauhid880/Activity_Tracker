import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Sidebar from "../Sidebar/Sidebar";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className=" activities-container grid lg:grid-cols-6 sm:grid-rows-6 gap-2">
      <div className="content-container lg:col-span-5">
        <p className="lg:text-3xl sm:text-xl m-10 font-mono font-bold text-start">
          Select your Activities
        </p>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-x-2 gap-y-5 m-10">
          {activities.map((activity) => (
            <Activity activity={activity} key={activity.id}></Activity>
          ))}
        </div>
      </div>
      <div className="Side-content col-span-1">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Activities;
