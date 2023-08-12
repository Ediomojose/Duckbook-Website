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
        <div className="grid grid-cols-2 items-center justify-center gap-6  md:grid-cols-5  ">
          <img src={GoogleLogo} alt="Google logo" className="mix-blend-luminosity"/>
          <img src={PaystackLogo} alt="Paystack logo"className="mix-blend-luminosity"/>
          <img src={PandascrowLogo} alt="Panda Scrow logo" className="mix-blend-luminosity"/>
          <img src={FlutterwaveLogo} alt="Flutterwave logo" className="mix-blend-luminosity"/>
          <img src={MicrosoftLogo} alt="Microsoft logo" className="mix-blend-luminosity"/>
        </div>
      </div>
    </>
  );
};

export default BrandTrustSection;
