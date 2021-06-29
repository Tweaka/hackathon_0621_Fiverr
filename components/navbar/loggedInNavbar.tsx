import React from "react";

export default function NavbarIn(): JSX.Element {
  return (
    <section>
      <ul className="flex m-6 items-center">
        <li className="mx-2 text-Fiverr font-bold">Fiverr Pro</li>
        <li className="mx-2 text-blue-900 font-bold">Try Fiverr Buisness</li>
        <li className="mx-2">Explore</li>
        <li className="mx-2">Messages</li>
        <li className="mx-2">Lists</li>
        <li className="mx-2">Orders</li>

        <li className="mx-2 bg-Fiverr px-2 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
          <button className="">T</button>
        </li>
      </ul>
    </section>
  );
}
