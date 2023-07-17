import React, {useState } from "react";
import { Link } from "react-router-dom";
import { ClearAllIcon, FavoriteIcon, SearchIcon, UserIcon } from "../icons";
import Modal from "@mui/material/Modal"
import Login from "../user/Login";
import Signup from "../user/Signup";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowLogin(false);
    setShowSignup(!showSignup);
  };
  
  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
  }


  
  return (
    <div>
      <div className="flex justify-between px-2 md:px-5 fixed w-screen z-50 py-2 md:py-5 bg-gray-200 shadow-md">
        <Link className="hidden md:block">logo</Link>
        <div className="sm:block md:hidden ">
          <ClearAllIcon
            sx={{
              fontSize: { md: "40px", sm: "35px" },
              cursor: "pointer",
              paddingTop: "2px",
              "&:hover": { color: "orange" },
            }}
          />
        </div>

        <div className=" w-[70%] sm:w-[50%] md:w-[60%] h-8 md:h-10 flex justify-center items-center rounded-l-lg">
          <input
            placeholder="Search product..."
            className="w-11/12 h-full px-5 outline-none rounded-l-lg"
          />
          <span className="w-7 sm:w-9 h-8 md:h-10 md:w-10 bg-white rounded-r-lg ml-0.5">
            <SearchIcon
              sx={{
                fontSize: { md: "40px", sm: "35px" },
                color: "#00BCD4",
                cursor: "pointer",
                paddingTop: "2px",
                "&:hover": { color: "orange" },
              }}
            />
          </span>
        </div>

        <nav className="flex gap-4 mr-3 md:mr-0">
          <span className=" hidden md:block" onClick={handleShowLogin}>
            <UserIcon
              sx={{
                fontSize: { md: "30px", sm: "25px" },
                color: "#00BCD4",
                cursor: "pointer",

                "&:hover": { color: "orange" },
              }}
            />
          </span>
          <Link className=" hidden md:block relative">
            <FavoriteIcon
              sx={{
                fontSize: { md: "30px", sm: "25px" },
                color: "#00BCD4",
                cursor: "pointer",
                "&:hover": { color: "orange" },
              }}
            />
            <span className="absolute -top-2 -right-2 text-orange-400 font-sans font-bold ">
              0
            </span>
          </Link>
          <Link className="relative">
            <span className="material-symbols-outlined md:text-3xl text-cyan-500">
              shopping_cart
            </span>
            <span className="absolute -top-2 -right-2 text-orange-400 font-sans font-bold ">
              0
            </span>
          </Link>
        </nav>
      </div>

      <Modal
        open={showLogin}
        onClose={handleShowLogin}
        aria-labelledby="model-model-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center outline-none border-none "
      >
        <div className="w-10/12 h-[88vh] p-2 bg-white rounded shadow-lg outline-none border-none">
          <Login
            handleClose={handleClose}
            handleShowSignup={handleShowSignup}
          />
        </div>
      </Modal>

      <Modal
        open={showSignup}
        onClose={handleShowSignup}
        aria-labelledby="model-model-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center outline-none border-none "
      >
      <div className="w-10/12 h-[88vh] p-2 bg-white rounded shadow-lg outline-none border-none">
          <Signup
            handleShowLogin={handleShowLogin}
            handleClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
