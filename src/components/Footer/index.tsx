import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";

import Logo from "../../assets/img/new-logo.webp";
import LogoPreto from "../../assets/img/newaligner__horz_mini1_1.webp";

export const Footer = () => {
  return (
    <footer className="px-3 py-10  flex flex-col gap-10 md:px-10 lg:px-20 xl:px-30 2xl:px-52  bg-white bg-opacity-30 backdrop-blur-md  transition-all duration-300 p-6 text-black">
      <div className="flex flex-col  gap-3 lg:items-end justify-between lg:flex-row">
        <div className=" flex flex-col text-black items-start justify-center gap-3 ">
          <img src={Logo} alt="" className="hidden w-[200px] lg:block" />
          <img src={LogoPreto} alt="" className="lg:hidden w-[200px]" />
          <ul className="flex gap-3 lg:items-center">
            <li>
              <FaFacebookF size={25} />
            </li>
            <li>
              <FaInstagram size={25} />
            </li>
            <li>
              <FaYoutube size={25} />
            </li>
          </ul>
        </div>

        <ul className="flex flex-col text-black gap-3  justify-center text-xl">
          <li>
            <a
              className="flex gap-3 items-center"
              href="https://api.whatsapp.com/send?phone=5513997289237&text=Gostaria%20de%20falar%20com%20um%20consultor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={25}></FaWhatsapp>
              (13) 99728-9237
            </a>
          </li>
          <li>
            <a
              className="flex  gap-3 items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelephone size={25} /> (13) 3238-6555
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <p className="text-center lg:text-left text-black ">
        Copyright © 2022 New Aligner Desenvolvido por
        <a
          href="https://www.bmouseproductions.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Bmouse Productions
        </a>
      </p>
    </footer>
  );
};

/* bg-[#2B2A3E] */
