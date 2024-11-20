import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navlinks";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const [arreyLanguage, setarreyLanguage] = useState([]);
  const languages = ["az", "en", "tr"];

  return (
    <div className="py-8 px-4 container mx-auto  flex justify-between items-center">
      <h1 className="font-extrabold text-4xl text-emerald-200 tracking-wider">
        NFT
      </h1>
      <nav className="flex items-center gap-8">
        {navLinks[i18n.language].map((item, index) => {
          return (
            <NavLink
              className="font-medium text-gray-300 text-xl tracking-wide  border-b duration-200 py-1 border-b-transparent transition-all hover:border-indigo-500 "
              to={item.path}
              key={index}
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
      <select className="rounded-xl text-black outline-none text-center p-1 uppercase text-xs " onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((item) => {
          return <option value={item} className="text-black ">{item}</option>;
        })}
      </select>
      <button className="py-2 px-6 rounded-lg bg-emerald-200 text-black">
        Login
      </button>
    </div>
  );
};

export default Header;
