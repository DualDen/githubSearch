import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";

export function App() {
  return (
    <div className="">
      <Navigation />
      <Outlet />
    </div>
  );
}
