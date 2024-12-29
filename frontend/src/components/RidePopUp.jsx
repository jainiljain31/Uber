import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i
          className="
        text-3xl text-gray-200
        ri-arrow-down-wide-line"
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-xl">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-contain"
            src="https://w7.pngwing.com/pngs/698/726/png-transparent-graphy-male-taxi-driver-miscellaneous-photography-transport-thumbnail.png"
          />
          <h2 className="text-xl font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex justify-between items-center flex-col gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.fare}</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-5">
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className=" mt-1 text-gray-700 rounded-lg bg-gray-300 font-semibold p-3 px-10"
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
            props.confirmRide();
          }}
          className=" text-white rounded-lg bg-green-600 font-semibold p-3 px-10"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
