import React from "react";
import Dash from "./Dash";
import MenuCard from "./MenuCard";
import Image from "next/image";
const menuData = [
    {
        Image: "/20.jpg",
        title: "Delicious Sharwarma",
        desc: "Delicious Shawarma features marinated meat wrapped in soft pita, loaded with fresh veggies and savory sauces for a perfect bite!",
        price: "19.50$",
    },
    {
        Image: "/21.jpeg",
        title: "PanCakes",
        desc: "Fluffy pancakes drizzled with syrup and topped with fresh fruit make for a delightful breakfast treat!",
        price: "19.50$",
    },
    {
      Image: "/c.jpg",
        title: "Bake Cake",
        desc: "Indulge in a moist, flavorful baked cake, layered with creamy frosting and perfect for any celebration!",
        price: "19.50$",
    },
    {
      Image: "/11.jpg",
        title: "HotDog Stick",
        desc: "Savor the fun of a hotdog stick, featuring juicy sausages grilled to perfection and served on a convenient skewer!",
        price: "19.50$",
    },
    {
      Image: "/12.jpg",
        title: "Noodles",
        desc: "Delicious noodles tossed in savory sauces and mixed with fresh vegetables make for a satisfying meal!",
        price: "19.50$",
    },
    {
      Image: "/13.jpg",
        title: "Sandwich",
        desc: "Enjoy a hearty sandwich stacked with fresh ingredients and flavorful spreads, perfect for a quick and tasty meal!",
        price: "19.50$",
    },
    {
      Image: "/16.webp",
        title: "Burger",
        desc: "Savor a juicy burger loaded with fresh toppings and served on a soft bun, delivering flavor in every bite!",
        price: "19.50$",
    },
    {
      Image: "/50.jpg",
        title: "Tomato Pizza",
        desc: "Indulge in a delicious tomato pizza topped with fresh tomatoes, melted cheese, and fragrant herbs for a perfect slice!",
        price: "19.50$",
    }
]

const Menu = () => {
  return (
    <div className="container pt-40 ">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
        Explore our diverse menu, crafted to delight every taste bud!
          <br />
          Delicious options await you!
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Makhni Handi</li>
        <li>Dinner</li>
        <li>American Salad</li>
        <li>Meat & Chicken</li>
        <li>Ice Cream</li>
        <li>Chicken Chowmein</li>
        <li>Butter Chicken</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/10.webp"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

    <div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
        {menuData.map((item, index) => <MenuCard key={index} Image={item.Image} title={item.title} desc={item.desc} price={item.price} />)}

    </div>

      </div>
    </div>
  );
};

export default Menu;
