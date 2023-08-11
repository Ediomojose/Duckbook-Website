import React from "react";
import Button from "./Button";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h1 className="font-silk text-natural-green text-4xl text-center md:text-7xl lg:text-8xl">
            Manage your money like a boss
          </h1>
          <p>Join 100+ small businesses who have chosen duckbook.</p>
          <Button />
        </div>
        <div>
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
        <p>Duckbook 2023, All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
