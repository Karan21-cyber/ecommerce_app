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
import OrderHistory from "./OrderHistory";
import { Drawer } from "@mui/material";

function Dashboard() {
  const [header, setHeader] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    // <div>
    <div className="flex gap-px w-screen overflow-hidden h-screen">
      <div className="hidden md:block  ">
        <SideMenu setHeader={setHeader} />
      </div>

      <div className="flex flex-col w-screen">
        <div className=" bg-indigo-950 flex justify-between text-white px-3 py-2 font-xs font-sans">
          <div className="sm:block md:hidden ">
            <ClearAllIcon onClick={handleDrawerToggle} />
          </div>
          <p className="hidden md:block">{header.toLocaleUpperCase()}</p>
          <p>profile</p>
        </div>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { sm: "block", md: "none" },
          }}
          className="w-screen"
        >
          <SideMenu
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </Drawer>

        <div className="my-2 mx-2 ">
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
            <Route path="/orderhistory" element={<OrderHistory />} />
          </Routes>
        </div>
      </div>
    </div>
    // {/* </div> */}
  );
}

export default Dashboard;
