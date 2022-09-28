import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className=" activities-container">
      <div className="mt-10  content-container grid gap-3 grid-cols-3">
        {/* <p className="">Select your Activities</p> */}
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.id}></Activity>
        ))}
      </div>
      <div>
        Activities Calculation Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita dolor dolore quos repellat enim pariatur
        corrupti ducimus! Excepturi, accusamus repellat!
      </div>
    </div>
  );
};

export default Activities;
