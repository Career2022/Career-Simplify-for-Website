import React from "react";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    // orginally - pt-36
    <div className="flex flex-col items-center justify-center w-full md:pt-20 pt-15 px-7   md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-2xl md:text-3xl lg:text-4xl relative font-bold text-gray-800 max-w-3xl mx-auto">
        Empower your future with the courses designed to{" "}
        <span className="text-blue-600">fit your choice</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        consectetur expedita eum voluptates voluptas omnis minima, cumque eos
        sint necessitatibus tempora ipsum ut explicabo voluptate nemo error
        dolorem. Iste, consequuntur?
      </p>

      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        iste. Tempore, aperiam. Sequi molestias, suscipit mollitia, fugit,
        necessitatibus odio labore pariatur fugiat ipsam obcaecati molestiae.
        Sint explicabo quia autem optio.
      </p>
      <Searchbar />
    </div>
  );
};

export default Hero;

// h1- md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto

// img - md:block hidden absolute -bottom-7 right-0
