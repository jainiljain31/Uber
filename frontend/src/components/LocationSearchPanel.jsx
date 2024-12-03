import React from "react";

const LocationSearchPanel = (props) => {
  // console.log(props)
  const locations = [
    "431-B,Bhopalpura,Udaipur",
    "24-B,Bhopalpura,Udaipur",
    "24-C,Bhopalpura,Udaipur",
    "400-B,Bhopalpura,Udaipur",
    "120-B,Bhopalpura,Udaipur",
  ];

  return (
    <div>
      {/* this is just sample Data */}

      {locations.map((elem, i) => {
        return (
          <div
           onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
           }}
            key={i}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2"
          >
            <h2 className="bg-[#eee] w-8 h-8 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
