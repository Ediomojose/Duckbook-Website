import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <main className="bg-natural-light-orange flex flex-col items-center gap-4 px-4 py-16 md:px-8 md:py-18 lg:px-52 lg:py-20 2xl:px-[500px] 2xl:py-24">
        <h1 className="font-silk text-natural-green text-4xl text-center md:text-7xl lg:text-8xl">Manage your money like a boss</h1>
        <p className="font-avenir text-natural-black text-center text-lg md:text-xl lg:text-2xl">
          Create beautiful invoices, accept online payments, and make accounting
          easy — all in one place — with Duck’s suite of money tools powered by
          Pandascrow.
        </p>
        <Button/>
      </main>
    </>
  );
};

export default HeroSection;
