import React, { useState } from "react";
import { ClearAllIcon } from "../icons";
import { Route, Routes } from "react-router-dom";

import SideMenu from "./SideMenu";
import AddShop from "./AddShop";
import ShopList from "./ShopList";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import OrderLists from "./OrderLists";
import Overview from "./Overview";

function Dashboard() {
  const [header, setHeader] = useState("dashboard");

  return (
    <div>
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
              <Route path="/addshop" element={<AddShop />} />
              {/* edit shop */}
              <Route path="/editshop/:id" element={<AddShop />} />
              <Route path="/shoplist" element={<ShopList />} />
              <Route path="/addproduct" element={<AddProduct />} />
              {/* edit product  */}
              <Route path="/editproduct/:id" element={<AddShop />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/orderlist" element={<OrderLists />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
