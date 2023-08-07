import React from "react";
import GoogleLogo from "/public/images/Google.png";
import PaystackLogo from "/public/images/Paystack.png";
import PandascrowLogo from "/public/images/Panda Scrow.png";
import FlutterwaveLogo from "/public/images/Flutterwave.png";
import MicrosoftLogo from "/public/images/Microsoft.png";

const BrandTrustSection = () => {
  return (
    <>
      <div className="bg-natural-white flex flex-col items-center justify-center gap-10 py-12 px-5 md:gap-14">
        <p className="font-avenir text-natural-black text-lg md:text-2xl">
          We’re not even out yet, but they trust us...
        </p>
        <div className="flex flex-col flex-wraps items-center justify-center gap-6  md:flex-row ">
          <img src={GoogleLogo} alt="Google logo" />
          <img src={PaystackLogo} alt="Paystack logo" />
          <img src={PandascrowLogo} alt="Panda Scrow logo" />
          <img src={FlutterwaveLogo} alt="Flutterwave logo" />
          <img src={MicrosoftLogo} alt="Microsoft logo" />
        </div>
      </div>
    </>
  );
};

export default BrandTrustSection;
