import React from "react";

const Navbar = () => {
  return (
    <div className="py-5 flex items-center gap-3 sticky top-0 z-10 px-5 bg-linear-to-r from-[#111111] to-[#777777] bg-transparent">
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-transparent backdrop-blur-xl border rounded-box z-1 mt-3 w-[25vh] p-2 shadow"
        >
          <li>
            <a href="#" className="text-white/70">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 pr-2">
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn rounded-full bg-[#E6533C] border-none"
            >
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="page-size flex  justify-between items-center">
        <div className="">
          <h1 className="font-extrabold text-4xl text-[#E6533C] italic ">
            Fitness
          </h1>
        </div>
        <div className="">
          <ul className="lg:flex gap-8 hidden items-center border border-white/20 rounded-full p-2">
            <li>
              <a
                href=""
                className="btn rounded-full bg-[#E6533C] px-6 border-none"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70 pr-2">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button className="btn rounded-full bg-[#E6533C] px-6 border-none ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
