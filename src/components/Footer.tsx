import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container pt-40">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Hey, My Name Is Ahmed Memon Im 15 Years Old Web Developer Learning
            From "Governor Sindh IT Initiative" And This Was My 4 + 5 Assignment
            Thank You!!!!
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurent</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
          <FaFacebookF/>
          <BsTwitter/>
          <BsPinterest/>
          <FaLinkedinIn/>
</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
