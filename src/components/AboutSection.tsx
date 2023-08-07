import React from "react";
import CoverImage from "/public/images/Cover.png";
import Button from "./Button";

const AboutSection = () => {
  return (
    <>
      <article className="bg-natural-light-orange grid grid-cols-1 ">
        <h2>Everything you need Nothing you don’t</h2>
        <div>
          <span>Invoicing</span>
          <span>Payments</span>
          <span>Accounting</span>
          <span>Payroll</span>
          <span>Advisor</span>
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
