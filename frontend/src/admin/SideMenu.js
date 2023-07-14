import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  CloseIcon,
  GroupIcon,
  HomeIcon,
  InventoryIcon,
  LogoutIcon,
  ReviewsIcon,
  ShoppingBagIcon,
  StorefrontIcon,
} from "../icons";

function SideMenu({ setHeader, mobileOpen, handleDrawerToggle }) {
  return (
    <div className="flex flex-col bg-indigo-950 text-white px-7 pt-3 overflow-hidden">
      <div className="flex justify-between z-10 fixed w-48">
        <h3>Logo</h3>
        {mobileOpen ? <CloseIcon onClick={handleDrawerToggle} /> : ""}
      </div>

      <div className="flex flex-col  w-48 h-screen  gap-3 mt-12 font-sans text-sm overflowY-scroll">
        <Link
          to="/"
          onClick={(e) => setHeader("dashboard")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <HomeIcon fontSize="small" />
          Dashboard
        </Link>

        <Link
          to="/userlist"
          onClick={(e) => setHeader("User List")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <GroupIcon fontSize="small" />
          Customers
        </Link>

        <Link
          to="sellerlist"
          onClick={(e) => setHeader("Seller List")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <GroupIcon fontSize="small" />
          Sellers
        </Link>

        <Link
          to="/shoplist"
          onClick={(e) => setHeader("shop list")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <StorefrontIcon fontSize="small" />
          Shops
        </Link>

        <Link
          to="/productlist"
          onClick={(e) => setHeader("Product List")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <ShoppingBagIcon fontSize="small" />
          Products
        </Link>

        <Link
          to="orderlist"
          onClick={(e) => setHeader("order list")}
          className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
        >
          <InventoryIcon fontSize="small" />
          Orders
        </Link>
        <Link
          to="/reviews"
          onClick={(e) => setHeader("Reviews")}
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
      </div>
    </div>
  );
}

export default SideMenu;
