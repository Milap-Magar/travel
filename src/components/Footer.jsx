import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-gradient-to-b from-amber-200 to-amber-300 pt-24 pb-7">
        <div className="grid items-center grid-cols-3 justify-items-center">
          {titles?.map((val, i) => (
            <div key={i} className="grid items-center justify-items-center">
              <h1 className="text-xl lg:text-base uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {links?.map((list, i) => (
            <ul
              key={i}
              className="grid items-center justify-items-center gap-1"
            >
              {list?.map((val, i) => (
                <Link to={`/${val.link}`}>
                  <li key={i} className="font-mono text-sm sm:text-xs">
                    {val.link}
                  </li>
                </Link>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights 2023{" "}
              <span className="font-semibold"> Milap.dev </span>
            </p>
            <div className="flex items-center gap-3">
              <Link to={"https://www.facebook.com/Milap.Magar2022"} target="_blank">
                <AiFillFacebook className="w-7 h-7" />
              </Link>
              <Link to={"https://github.com/Milap-Magar"} target="_blank">
                <AiFillGithub className="w-7 h-7" />
              </Link>
              <Link to={"https://www.linkedin.com/in/milap-magar-21427a229/"} target="_blank">
                <AiFillLinkedin className="w-7 h-7" />
              </Link>
              <Link to={"https://www.instagram.com/milx.2023/"} target="_blank">
                <AiFillInstagram className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
