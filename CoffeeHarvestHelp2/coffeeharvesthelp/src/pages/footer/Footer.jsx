import React from "react";
import ItemsContainer from "../../components/footer/ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-[#182848] text-black mt-10">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#0e0b3066] py-7 object-bottom">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 "
        >
          <span className="text-[#f46b45]"> Coffe Harvest Help</span>
        </h1>
        <div>
        </div>
      </div>
      <ItemsContainer />
    </footer>
  );
};

export default Footer;