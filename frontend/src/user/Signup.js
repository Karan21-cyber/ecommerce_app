import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup({ handleShowLogin, handleClose }) {
  const [loading , setLoading] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [errcount, setErrCount] = useState(0);
  const [errfirstname, setErrFirstName] = useState("");
  const [errlastname, setErrastName] = useState("");
  const [errdob, setErrDob] = useState("");
  const [errgender, setErrGender] = useState("");
  const [erremail, setErrEmail] = useState("");
  const [errphone, setErrPhone] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [errconfirm, setErronfirm] = useState(false);

  const handleSubmit = () => {
    
    if (password != confirmPassword) {
      setErrPassword("Password doesn't match");
    }
    console.log(
      firstname,
      lastname,
      dob,
      gender,
      email,
      phone,
      password,
      confirmPassword,
      confirm
    );
  };

  const handleConfirm = () => {
    setConfirm(!confirm);
  };
  return (
    <div className="h-full w-full overflow-hidden">
      <div className=" m-2 w-12/12 h-full  grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden">
        <div className=" hidden md:hidden lg:block">
          <img
            src={require("../assets/image1.jpg")}
            className=" w-full h-full object-cover"
            alt="signup"
          />
        </div>

        <div className=" relative w-full h-[86vh] bg-slate-200 px-3 py-4 overflow-y-scroll no-scrollbar  ">
          <span
            className="absolute -top-1 right-2 text-4xl cursor cursor-pointer ease-linear duration-300 text-gray-400 animate-bounce hover:animate-none hover:text-gray-600"
            onClick={handleClose}
          >
            &times;
          </span>
          <header className="text-2xl font-bold">
            Create Customer Account
          </header>
          <div className="flex flex-col md:flex-row   gap-2 ">
            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="border-2 rounded p-2 px-3"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border-2 rounded p-2 px-3"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row   gap-2 ">
            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="border-2 rounded p-2 px-3 text-gray-400"
              />
            </div>

            <div className="flex mt-5 flex-col gap-2 w-full">
              <label className="font-sm font-normal">Gender</label>
              <select
                className="border-2 rounded p-2 px-3 text-gray-400"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Phone Number</label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="border-2 rounded p-2 px-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Email</label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="border-2 rounded p-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="border-2 rounded p-2 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h2 className="font-normal font-sm text-gray-400 mt-5">
            Include minimum of 8 characters and at least one number, one
            letter,one special character.
          </h2>
          <div className="flex mt-5 flex-col gap-2">
            <label className="font-sm font-normal">Confirm Password</label>
            <input
              type="password"
              placeholder="Retype Password"
              className="border-2 rounded p-2 px-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex mt-5 gap-2">
            <input
              type="checkbox"
              defaultChecked={confirm}
              onClick={handleConfirm}
            />
            <Link className="font-sm font-normal text-red-300 ">
              I agree Terms & condition.
            </Link>
          </div>

          <button
            onClick={handleSubmit}
            className="text-white bg-blue-600 p-3 font-bold items-center w-full rounded my-4 hover:text-blue-500 hover:bg-slate-300"
          >
            Signup {">>"}
          </button>
          <h2>
            Already Have an Account{" "}
            <span
              className="text-gray-400 underline hover:text-blue-500 cursor-pointer"
              onClick={handleShowLogin}
            >
              Login
            </span>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
