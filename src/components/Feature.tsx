import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import Link from "next/link";
const Feature = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>
      <p className="max-w-[550px] pt-10 text-gray-700">
        Discover our featured food that tantalizes your taste buds and elevates
        your dining experience. Each dish is crafted with the finest
        ingredients, bursting with flavors and colors that tell a story. Join us
        in celebrating culinary excellence—your next favorite meal awaits!
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <img
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/f.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
          <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Read More</button>
            <h2 className="font-medium text-xl">Fusion Delight</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Fusion Delight blends palak paneer, pasta, and rice for a tasty,
              satisfying meal. Enjoy creamy spinach and paneer in every bite!
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <img
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/chowmein.jpg"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash /> <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Read More</button>
            <h2 className="font-medium text-xl">Chicken Chowmein</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Chicken Chowmein features tender chicken tossed with stir-fried
              noodles and colorful vegetables, creating a deliciously savory
              dish. Enjoy the perfect balance of flavors in every bite!
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <img
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="salad.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash /> <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Read More</button>
            <h2 className="font-medium text-xl">American Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              American Salad is a fresh mix of crisp greens, colorful
              vegetables, and flavorful toppings, all tossed in a zesty
              dressing. It's a refreshing and healthy option for any meal!
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <img
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/icecream.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash /> <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Read More</button>
            <h2 className="font-medium text-xl">Ice Cream</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Ice Cream is a creamy, dreamy treat that delights with every
              scoop. Available in a variety of flavors, it’s the perfect
              indulgence for any occasion!
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <img
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/butter.jpg"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash /> <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Read More</button>
            <h2 className="font-medium text-xl">Butter Chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Butter Chicken is tender chicken in a rich, creamy tomato sauce.
              Served with naan or rice, it's a delicious classic!
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <img
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/shawarma.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash /> <button className="bg-accent text-white px-4 py-2 rounded-3xl hover:bg-black">Read More</button>
            <h2 className="font-medium text-xl">Shawarma</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Shawarma is a flavorful wrap filled with marinated meat, fresh
              vegetables, and a zesty sauce. It’s a delicious, handheld delight
              that’s perfect for any meal!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
