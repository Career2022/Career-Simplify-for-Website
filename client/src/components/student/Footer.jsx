import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
        <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
          <div className="flex flex-col md:items-start items-center w-full">
            <img className="h-10 w-10" src={assets.cslogo} alt="logo" />
            <p className="mt-6 text-center md:text-left text-sm text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              adipisci praesentium, laudantium molestias aspernatur voluptas.
              Quod ad nobis asperiores dicta deleniti quibusdam aliquid beatae,
              hic alias vitae architecto ullam dignissimos.
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center w-full">
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="flex flex-col items-center md:items-start space-y-3 text-sm text-white/80">
              <li className="hover:text-white transition-colors">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">About us</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Contact us</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-start w-full">
            <h2 className="py-4 text-center text-xs md:text-sm text-white/60">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vero inventore? Modi maiores eveniet nisi officia sed nemo, facilis voluptatibus iste debitis rerum? Eligendi dolor suscipit expedita architecto, doloribus dolore.
            </p>
            <div className=" flex items-center gap-2 pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-white border border-gray-500/30 bg-gray-800 tetx-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
              />
              <button className="bg-violet-600 w-24 h-9 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-white/60">
          © 2025 Career Simplify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
