import Avatar1 from "/public/images/Ellipse 1.png";
import Avatar2 from "/public/images/Ellipse 2.png";
import Avatar3 from "/public/images/Ellipse 3.png";

const GoalSection = () => {
  return (
    <>
      <aside className="bg-natural-orange  flex flex-col items-center justify-center gap-8 px-10 py-8 md:flex-row md:px-20 md:py-12 lg:px-32 lg:py-16 2xl:px-42">
        <div className="grid grid-cols-2 items-center justify-center">
          <img src={Avatar1} alt="Avatar" className="row-span-3"/>
          <img src={Avatar3} alt="Avatar" />
          <img src={Avatar2} alt="Avatar" />
        </div>
        <p className="text-natural-black font-bold font-avenir lg:text-3xl">
          Duckbook is determined to helped over 1,000,000,000 Nigerians small
          business owners take control of their finances
        </p>
      </aside>
    </>
  );
};

export default GoalSection;
