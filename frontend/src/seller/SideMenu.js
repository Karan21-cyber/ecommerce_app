import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    AddBusinessIcon,
    AssessmentIcon,
  GroupIcon,
  HomeIcon,
  InventoryIcon,
  LogoutIcon,
  QueuePlayNextIcon,
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
        to="/addshop"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <AddBusinessIcon fontSize="small" />
        Add Shops
      </Link>

      <Link
        to="/shoplist"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <StorefrontIcon fontSize="small" />
        Shop List
      </Link>

      <Link
        to="/addproduct"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <QueuePlayNextIcon fontSize="small" />
        Add Product
      </Link>

      <Link
        to="/productlist"
        className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
      >
        <ShoppingBagIcon fontSize="small" />
        Product List
      </Link>

      <Link
        to="orderlist"
        className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
      >
        <InventoryIcon fontSize="small" />
        Orders
      </Link>

      <Link
        to="orderhistory"
        className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
      >
        <AssessmentIcon fontSize="small" />
        Orders History
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
