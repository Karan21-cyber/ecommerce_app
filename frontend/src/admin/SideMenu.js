import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  GroupIcon,
  HomeIcon,
  InventoryIcon,
  LogoutIcon,
  ReviewsIcon,
  ShoppingBagIcon,
  StorefrontIcon,
} from "../icons";

function SideMenu() {

  return (
    <div className="flex flex-col bg-indigo-950 text-white w-48 h-screen px-7 gap-3 pt-12 font-sans  text-sm">
      <Link
        to="/"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <HomeIcon fontSize="small" />
        Dashboard
      </Link>

      <Link
        to="/userlist"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <GroupIcon fontSize="small" />
        Customers
      </Link>

      <Link
        to="sellerlist"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <GroupIcon fontSize="small" />
        Sellers
      </Link>

      <Link
        to="/shoplist"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <StorefrontIcon fontSize="small" />
        Shops
      </Link>

      <Link
        to="/productlist"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <ShoppingBagIcon fontSize="small" />
        Products
      </Link>

      <Link
        to="orderlist"
        className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
      >
        <InventoryIcon fontSize="small" />
        Orders
      </Link>
      <Link
        to="/reviews"
        className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
      >
        <ReviewsIcon fontSize="small" />
        Reviews
      </Link>
      <Link
        to="logout"
        className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
      >
        <LogoutIcon fontSize="small" />
        Logout
      </Link>
      {/* </div> */}
    </div>
  );
}

export default SideMenu;
