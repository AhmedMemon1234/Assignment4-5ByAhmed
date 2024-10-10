import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";
const Hero = () => {
    return (
        <div className="relative minh-h-screen">
        <Image className="lg:w-[580px] xl:w-[920px] h-auto absolute right-0 top-0 -z-10"
        src="food.png " 
        width={1000}
         height={600}
          alt="hero bg" 
          />
          <NavBar />

<div className="container h-[calc(100vh-160px)] grid items-center">
<div className="space-y-4 bg-[#ffffff98] w-fit p-4">
    <p className="uppercase font-medium">DISCOVER UNIQUE PICKS</p>
    <h2 className="text-4xl sm:text-6xl font-bold">
    MouthWatering <span className="text-accent">Food</span>
    </h2>
    <p className="text-gray-700 text-[14px] sm:text-[16px] font">Taste that delights, <br />
    What are you waiting for?</p>

    <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px] hover:bg-black">View More</button>
</div>
</div>
        </div>
    )
} 

export default Hero