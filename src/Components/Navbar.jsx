import React from "react";
import Cart from "./Cart";
import { setSearch } from "../Redux/Slices/SearchSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="p-5 bg-[#FC6736] flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://tse3.explicit.bing.net/th?id=OIP._FQjNJj_2RoiqZY_jJLY0wHaFu&pid=Api&P=0&h=180"
          className="w-14 rounded-md"
          alt=""
        />
        <div className="ml-2 font-semibold text-pretty text-3xl">TASTY BITES</div>
      </div>

      <div className="text-lg text-stone-200 mt-3 sm:mt-0 sm:ml-2">
        {new Date().toUTCString().slice(0, 16)}
      </div>

      <div className="relative mt-3 sm:mt-0 sm:ml-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full sm:w-96 rounded-md p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mt-3 sm:mt-0 sm:ml-4">
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;
