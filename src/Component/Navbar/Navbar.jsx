import React from 'react';

const Navbar = () => {
    return (
      <div className="py-5 sticky top-0 z-10 px-5 bg-linear-to-r from-[#111111] to-[#777777] bg-transparent">
        <div className="page-size flex  justify-between items-center">
          <div className="">
            <h1 className="font-extrabold text-4xl text-[#E6533C] italic ">
              Fitness
            </h1>
          </div>
          <div className="">
            <ul className="lg:flex gap-12 hidden items-center border-2 border-white/10 text-lg  rounded-full p-1 ">
              <li>
                <a
                  href=""
                  className="btn rounded-full w-24 font-bold  bg-[#E6533C] border-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="" className="px-5 py-2 rounded-full w-24   ">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;