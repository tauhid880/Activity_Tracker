import React from "react";
import "./Activity.css";

const Activity = ({ activity, handleAddToListClick }) => {
  const { name, img, age, time } = activity;

  return (
    <div className="card sm:w-auto lg:w-96 rounded-lg border border-gray-500 shadow-lg shadow-gray-500/50">
      <figure className="px-4 pt-4">
        <img src={img} alt="Shoes" className="rounded-xl h-40 w-full" />
      </figure>
      <div className="card-body items-start text-start">
        <h1 className="card-title font-bold text-xl">{name}</h1>
        <p className="text-lg font-medium text-zinc-600">For Age : {age}</p>
        <h2 className="text-lg font-medium text-zinc-600">
          Time required : {time}m
        </h2>
        <div className="card-actions">
          <button
            onClick={() => handleAddToListClick(activity)}
            className="btn text-black bg-blue-200 border-none"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
