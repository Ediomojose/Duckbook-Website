import React from "react";
import BrandLogo from "./BrandLogo";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <nav className=" bg-natural-light-orange flex justify-between items-center px-2 py-5 md:px-12 md:py-9">
        <BrandLogo />
        <Button />
      </nav>
    </>
  );
};

export default Nav;
