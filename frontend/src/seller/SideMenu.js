import React from "react";
import { Link } from "react-router-dom";

import {
  AddBusinessIcon,
  AssessmentIcon,
  CloseIcon,
  HomeIcon,
  InventoryIcon,
  LogoutIcon,
  QueuePlayNextIcon,
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
          to="/addshop"
          onClick={(e) => setHeader("add Shop")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <AddBusinessIcon fontSize="small" />
          Add Shops
        </Link>

        <Link
          to="/shoplist"
          onClick={(e) => setHeader("shop list")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <StorefrontIcon fontSize="small" />
          Shop List
        </Link>

        <Link
          to="/addproduct"
          onClick={(e) => setHeader("Add Product")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <QueuePlayNextIcon fontSize="small" />
          Add Product
        </Link>

        <Link
          to="/productlist"
          onClick={(e) => setHeader("Product List")}
          className=" hover:bg-indigo-200 flex gap-2  transition delay-100 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400"
        >
          <ShoppingBagIcon fontSize="small" />
          Product List
        </Link>

        <Link
          to="orderlist"
          onClick={(e) => setHeader("Order List")}
          className="hover:bg-indigo-200 flex gap-2 hover:w-30 hover:px-2 hover:py-1 hover:h-7 hover:text-black hover:rounded focus:bg-indigo-200 focus:rounded focus:h-7 focus:py-1 focus:px-2 focus:w-30 focus:outline-none focus:text-black focus:ring focus:ring-indigo-400 transition delay-100"
        >
          <InventoryIcon fontSize="small" />
          Orders
        </Link>

        <Link
          to="orderhistory"
          onClick={(e) => setHeader("Order History")}
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
      </div>
    </div>
  );
}

export default SideMenu;
