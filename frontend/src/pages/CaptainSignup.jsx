import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstname,
        lastName: lastname,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-10 mb-10"
            src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">
              What's our Captain's name
            </h3>
            <div className="flex gap-4 mb-6">
              <input
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                required
              />
              <input
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">
              What's our Captain's email
            </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="Enter email"
              required
            />
            <h3 className="text-lg font-medium mb-2">Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="Enter password"
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
              Login
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-600">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
