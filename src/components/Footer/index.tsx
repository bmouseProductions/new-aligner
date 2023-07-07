import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

import Logo from "../../assets/img/new-aligner-logo.png";
export const Footer = () => {
  return (
    <footer className="px-3 py-10  text-white flex flex-col gap-10 md:px-10 lg:px-20 xl:px-30 2xl:px-52">
      <div className="flex flex-col  gap-3 lg:items-end justify-between lg:flex-row">
        <div className=" flex flex-col items-start justify-center gap-3 ">
          <img src={Logo} alt="" />

          <ul className="flex gap-3 items-center">
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
        <div className="">
          <ul className="flex flex-col text-white lg:text-black gap-3 lg:items-end justify-center text-xl">
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
                className="flex gap-3 items-center"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelephone size={25} /> (13) 3238-6555
              </a>
            </li>
            <li>
              <a
                className="flex gap-3 items-center"
                href="https://www.google.com/maps/place/Ortolig%C3%A1vel+%7C+Respons%C3%A1vel+T%C3%A9cnico+Dr.+Claudio+Figueiredo+CROSP+49549/@-23.9784737,-46.3090658,15z/data=!4m5!3m4!1s0x0:0x44f660ce3a36faaa!8m2!3d-23.9784737!4d-46.3090658?shorturl=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationDot size={25} />
                Fábrica Localizada no estado de São Paulo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-left text-white ">
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
