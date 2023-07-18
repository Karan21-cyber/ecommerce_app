import { Link } from "react-router-dom";
import React from "react";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LocationOnIcon,
  MailIcon,
  TwitterIcon,
} from "../icons";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Footer() {
  return (
    <div className="w-full mt-10 no-scrollbar">
      <section className="w-12/12 flex bg-gray-400 justify-center">
        <div className="w-full md:w-11/12  py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          <div className="w-full p-5">
            <label className="text-5xl font-bold">Logo</label>
            <div className="mt-5">
              <div className="flex gap-2 mt-3 text-gray-700 text:lg font-semibold">
                <MailIcon sx={{ fontSize: "30px" }} /> 184 Main Rd E, St Albans
                VIC 3021, Australia
              </div>
              <div className="flex gap-2 mt-3 text-gray-700 text:lg font-semibold">
                <LocationOnIcon sx={{ fontSize: "30px" }} />
                contact@company.com
              </div>
              <div className="flex gap-3 mt-3 text-gray-700 text:lg font-semibold">
                <LocalPhoneIcon sx={{ fontSize: "30px" }} />
                +001 2252 2245
              </div>

              <div className="flex gap-3 mt-5 text-gray-700">
                <FacebookIcon
                  sx={{
                    fontSize: 30,
                    "&:hover": { color: "purple", cursor: "pointer" },
                  }}
                />
                <TwitterIcon
                  sx={{
                    fontSize: 30,
                    "&:hover": { color: "purple", cursor: "pointer" },
                  }}
                />
                <GoogleIcon
                  sx={{
                    fontSize: 30,
                    "&:hover": { color: "purple", cursor: "pointer" },
                  }}
                />
                <InstagramIcon
                  sx={{
                    fontSize: 30,
                    "&:hover": { color: "purple", cursor: "pointer" },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full p-5 mt-5">
            <label className="text-xl font-bold ">Catgory</label>
            <div className="mt-5 flex flex-col gap-2 ">
              <Link className="text-gray-600 no-underline hover:text-white">
                Women
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Men
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Denim
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Shoes
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                T-shirt
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Tops
              </Link>
            </div>
          </div>

          <div className="w-full p-5 mt-5">
            <label className="text-xl font-bold ">Catgory</label>
            <div className="mt-5 flex flex-col gap-2 ">
              <Link className="text-gray-600 no-underline hover:text-white">
                Women
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Men
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Denim
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Shoes
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                T-shirt
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Tops
              </Link>
            </div>
          </div>

          <div className="w-full p-5 mt-5">
            <label className="text-xl font-bold ">Catgory</label>
            <div className="mt-5 flex flex-col gap-2 ">
              <Link className="text-gray-600 no-underline hover:text-white">
                Women
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Men
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Denim
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Shoes
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                T-shirt
              </Link>
              <Link className="text-gray-600 no-underline hover:text-white">
                Tops
              </Link>
            </div>
          </div>

          <div className="w-[350px] md:w-[400px] lg:w-full  p-5 mt-5">
            <label className="text-xl font-bold ">Newsletter Signup</label>
            <div className="mt-5 flex flex-col gap-2 ">
              <label>
                Subscribe to our newsletter and get 10% off your first purchase
              </label>
              <div className="relative w-[350px] h-[4vh] bg-white rounded-[20px] px-2">
                <input
                  className="px-3 h-full w-[244px] rounded-[20px] outline-none"
                  placeholder="Subscribe.."
                />
                <button className="absoulte bg-slate-500  h-[3vh] w-[90px] rounded-[20px] text-white">
                  Subscribe
                </button>
              </div>
              <div>Payment s lists</div>
            </div>
          </div>
        </div>
      </section>
      <div className=" h-[8vh] bg-black w-full flex justify-center items-center ">
        <label className="text-white font-sans text-lg font-md ">
          {" "}
          copyright 2023 <span className="text-blue-500">logo</span> all rights
          reserved. Powered by Karan Chaudhary
        </label>
      </div>
    </div>
  );
}

export default Footer;
