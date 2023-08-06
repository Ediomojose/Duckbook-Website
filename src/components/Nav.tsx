import React from "react";
import BrandLogo from "./BrandLogo";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 py-5 md:px-12 md:py-9">
        <BrandLogo />
        <Button />
      </div>
    </>
  );
};

export default Nav;
