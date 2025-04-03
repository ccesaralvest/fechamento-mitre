"use client";
import React from "react";
import Menu from "@/components/common/menu/menu";

const Header = () => {
  return (
    <header className="min-w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white">
      <div className="flex justify-end lg:justify-center sm:shadow-[0_4px_6px_rgba(0,0,0,0.1)] ">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
