import React from "react";
import CoverImage from "/public/images/Cover.png";
import Button from "./Button";

const AboutSection = () => {
  return (
    <>
      <article className="bg-natural-light-orange px-4 py-14 grid grid-cols-1 ">
        <h2 className="font-silk text-natural-green text-3xl text-center leading-10 md:text-5xl md:mx-40 lg:text-6xl lg:mx-96">
          Everything you need Nothing you don’t
        </h2>
        <div className="font-dmMono  bg-natural-white rounded-full my-16  grid grid-cols-5 gap-4 justify-center items-center mx-auto">
          <span className=" flex justify-center items-center py-4 px-10 bg-natural-green rounded-full text-natural-grey">
            Invoicing
          </span>
          <span className=" flex justify-center items-center py-4 px-10  rounded-full text-natural-grey">
            Payments
          </span>
          <span className=" flex justify-center items-center py-4 px-10  rounded-full text-natural-grey">
            Accounting
          </span>
          <span className=" flex justify-center items-center py-4 px-10  rounded-full text-natural-grey">
            Payroll
          </span>
          <span className=" flex justify-center items-center py-4 px-10  rounded-full text-natural-grey">
            Advisor
          </span>
        </div>
        <div>
          <div>
            <h3>All-in-one accounting platform built for startups</h3>
            <p>
              Duckbook allows you generate invoice, manage payments and automate
              invoice follow-ups for clients and businesses with pending
              payment. Save time and get paid, it’s that simple with Duckbook –
              now let’s flip a page with your name on it.
            </p>
            <Button />
          </div>
          <img src={CoverImage} alt="Cover image" />
        </div>
      </article>
    </>
  );
};

export default AboutSection;
