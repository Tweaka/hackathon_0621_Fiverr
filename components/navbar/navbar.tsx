import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/fiverr-new3326.webp";
import NavbarIn from "./loggedInNavbar";
import NavbarOut from "./loggedOutNavbar";

export default function Navbar(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="flex items-center justify-between">
      <section className="flex">
        <div className="w-32 pl-6 mr-3">
          <Image src={logo} alt="logo Fiverr" />
        </div>
        <div className="flex items-center">
          <input
            className="border p-1 border-gray-300 rounded-l-sm "
            type="text"
            placeholder="Find Services"
          />
          <button className="bg-Fiverr text-white rounded-r-sm p-1 px-3 font-bold">
            Search
          </button>
        </div>
      </section>
      {isLoggedIn ? <NavbarIn /> : <NavbarOut />}
    </div>
  );
}
