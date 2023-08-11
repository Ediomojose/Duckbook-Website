import React from "react";
import Button from "./Button";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <>
      <footer className="px-8 py-20 grid grid-cols-1 items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-silk text-natural-green text-4xl text-center md:text-7xl lg:text-8xl">
            Manage your money like a boss
          </h1>
          <p className="text-center">Join 100+ small businesses who have chosen duckbook.</p>
          <Button />
        </div>
        <div className="grid grid-cols-2 justify-between items-start gap-40 ">
          <BrandLogo />
          <ul>
            <li>Company</li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">T&amp;C</a>
            </li>
          </ul>
        </div>
        <p className="text-center">Duckbook 2023, All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
