import React from "react";

const Sidebar = () => {
  return (
    <div className="grid grid-rows-3 gap-1 items-center justify-center">
      <div className="profile-section mt-10 items-center justify-center lg:px-5 sm:pl-5">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </div>
        </div>
        <div>
          <p className="text-lg font-bold ml-2">Tauhid Islam</p>
          <p className="text-gray-400 ml-2">Dhaka,Bangladesh</p>
        </div>
        <div className="info-section grid grid-cols-3 gap-2 mt-5">
          <div className="font-bold">
            <p>
              77<small className="text-red-400">kg</small>
            </p>
            <h1 className="text-gray-400">Weight</h1>
          </div>
          <div className="font-bold">
            <p>5.4"</p>
            <h1 className="text-gray-400">Height</h1>
          </div>
          <div className="font-bold">
            <p>
              25<small className="text-red-400">yrs</small>
            </p>
            <h1 className="text-gray-400">Age</h1>
          </div>
        </div>
      </div>
      <div className="break-section items-center justify-center">
        <h1 className="text-center font-bold text-xl mb-5">Add A Break</h1>
        <div className="flex flex-col gap-3 lg:px-5 sm:pl-5">
          <button className="btn btn-outline btn-primary">10s</button>
          <button className="btn btn-outline btn-primary">20s</button>
          <button className="btn btn-outline btn-primary">30s</button>
          <button className="btn btn-outline btn-primary">40s</button>
          <button className="btn btn-outline btn-primary">50s</button>
        </div>
      </div>
      <div className="details-section">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusamus,
        provident officia placeat aliquam molestias ipsam nesciunt! Quia
        provident explicabo mollitia id soluta saepe, modi blanditiis cupiditate
        praesentium similique at, asperiores corporis optio ad consectetur
        doloremque voluptates! Facere explicabo ex exercitationem, perferendis
        dolores consequuntur harum, fugit quia tempora sunt distinctio.
      </div>
    </div>
  );
};

export default Sidebar;
