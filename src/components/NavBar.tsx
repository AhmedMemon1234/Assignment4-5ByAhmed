import React from "react";
import Image from "next/image";
import {AiOutlineMenu} from "react-icons/ai"
const NavBar = () => {
    return(
        <div className="container pt-6">
            <div className="flex justify-between items-center">
              <img src="/chef.png" width={50} height={50} alt="logo" />
              <ul className="md:flex hidden gap-5 items-center font-semibold text-[14px] text-white">
                <li>Home</li>
                <li>About</li>
                <li>Food</li>
                <li>Dish</li>
                <li>Contact</li>
              
              <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Sign Up</button>
              
              <AiOutlineMenu className="md:hidden text-accent"size={30} />
</ul>
            </div>
        </div>
    )
}

export default NavBar;