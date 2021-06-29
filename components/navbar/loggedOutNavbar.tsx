import React from "react";

export default function NavbarOut(): JSX.Element {
  return (
    <section>
      <ul className="flex items-center m-6">
        <li className="mx-2">Fiverr Buisness</li>
        <li className="mx-2">Explore</li>
        <li className="mx-2">English</li>
        <li className="mx-2">Messages</li>
        <li className="mx-2">€EUR</li>
        <li className="mx-2">Become a Seller</li>
        <li className="mx-2">
          <button>Sign In</button>
        </li>
        <li className="mx-2 bg-Fiverr px-3 py-1 text-white rounded-sm w-8 h-8 flex items-center justify-center">
          <button>Join</button>
        </li>
      </ul>
    </section>
  );
}
