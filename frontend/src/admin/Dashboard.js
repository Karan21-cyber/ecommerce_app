import React, { useState } from "react";
import {Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import {
  ClearAllIcon,

} from "../icons";
import SideMenu from "./SideMenu";
import UserList from "./UserList";
import SellerList from "./SellerList";
import AddShop from "../seller/AddShop";
import ShopList from "./ShopList";
import AddProduct from "../seller/AddProduct";
import ProductList from "./ProductList";
import Reviews from "./Reviews";
import OrderLists from "./OrderLists";

function Dashboard() {
    const [header, setHeader] = useState("dashboard");

  return (
    <div className="flex gap-px w-screen">
      <div className="hidden md:block  ">
        <SideMenu />
      </div>

      <div className="w-screen flex flex-col">
        <div className=" h-12 bg-indigo-950 flex justify-between text-white px-2 py-2 font-xs font-sans">
          <div className="sm:block md:hidden ">
            <ClearAllIcon />
          </div>
          <p className="hidden md:block">{header.toLocaleUpperCase()}</p>
          <p>profile</p>
        </div>

        <div className="my-2 mx-2 bg-indigo-300 ">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/sellerlist" element={<SellerList />} />
            <Route path="/addshop" element={<AddShop />} />
            <Route path="/shoplist" element={<ShopList />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/orderlist" element={<OrderLists/>} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
