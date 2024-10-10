import React from "react";
import Dash from "./Dash";
import ServiceCard from "./ServiceCard";
const servicesData = [
    {
        img: "/service hat.png",
        title: "Professional Kitchen",
        desc: "Professional Kitchen is a chef’s dream, featuring top-notch appliances and spacious work areas. It's the perfect place to unleash your culinary creativity and craft delicious meals!"
    },
    {
        img: "/2.png",
        title: "Delivery Service",
        desc: "Delivery Service ensures your favorite meals arrive hot and fresh at your doorstep. Enjoy convenience and speed without compromising on taste!"
    },
    {
        img: "/burger.png",
        title: "Delicious Burgers",
        desc: "Delicious Burger is a juicy, flavorful treat stacked with fresh ingredients and mouthwatering toppings. Perfectly grilled and served with a side of fries, it's a meal that satisfies every craving!"
    },
    {
        img: "/wifi.png",
        title: "Free WiFi",
        desc: "Free WiFi offers seamless internet access, allowing you to stay connected while enjoying your meal. Perfect for browsing, working, or sharing your dining experience!"
    }
];




const Services = () => {
    return(
        <div className="container pt-40">
            <div className="space-y-4 w-fit mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Choose Best <span className="text-accent">Services</span>
                </h2>
                <p className="text-gray-700">
                    Choose Best Services "Quality For Quality Peoples"
                    <br />
                    Mouth Watering Food 
                </p>
                <div className="w-fit mx-auto">
                    <Dash/>
                </div>
            </div>
            <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
                {servicesData.map((item, index) => ( <ServiceCard key={index} img={item.img} title={item.title} desc={item.desc} />))}
            </div>
        </div>
    )
}

export default Services;