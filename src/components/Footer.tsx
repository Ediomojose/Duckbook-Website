import Button from "./Button";
import BrandLogoFooter from "./BrandLogoFooter";

const Footer = () => {
  return (
    <>
      <footer className="bg-natural-black text-natural-white">
        <div className="flex flex-col gap-8 px-8 py-16">
          <div className="flex flex-col justify-center items-center gap-2 md:gap-3 md:px-40 lg:px-72">
            <h1 className="font-silk text-3xl text-center md:text-4xl lg:text-6xl">
              Everything you need Nothing you don’t
            </h1>
            <p className="text-center font-avenir text-sm md:text-lg">
              Join 100+ small businesses who have chosen duckbook.
            </p>
            <div className="text-natural-white">
            <Button />
            </div>
          </div>
          <div className="flex justify-between items-start md:px-10">
            <BrandLogoFooter />
            <ul className="font-avenir">
              <li className="text-natural-grey text-2xl">Company</li>
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
          <p className="text-center font-avenir mt-8">Duckbook 2023, All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
