import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import NavLinks from "../data/navlinks";
import ProfileDate from "../data/profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-2 px-5 flex flex-row justify-between lg:justify-around items-center lg:py-3">
        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="false"
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex justify-center items-center w-fit"
        >
          <img
            className="w-12 h-12 ml-3 cursor-pointer scale-125 lg:scale-150"
            src={ProfileDate.logo}
            alt={ProfileDate.name}
          />
        </Link>
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden md:mx-auto lg:flex flex-wrap items-center text-lg justify-center gap-12"
        >
          {NavLinks.map((item) => (
            <Link
              key={item.title}
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              to={item.link}
              className="cursor-pointer hover:text-dark-orange"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-white">
            {isOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <button
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden lg:flex items-center justify-content w-fit"
        >
          <a
            href={ProfileDate.resume}
            target="_blank"
            rel="norefferer"
            className="leading-none text-white bg-dark-orange py-3 px-10 rounded-lg font-medium text-lg"
          >
            Resume
          </a>
        </button>
        {isOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="500"
              data-aos-once="false"
              className="rounded-b-lg bg-darkblue shadow-lg px-5 pb-4"
            >
              <nav className="flex flex-col gap-y-7 text-xl">
                {NavLinks.map((item) => (
                  <Link
                    key={item.title}
                    onClick={() => setIsOpen(false)}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={750}
                    to={item.link}
                    className="cursor-pointer hover:text-dark-orange"
                  >
                    {item.title}
                  </Link>
                ))}
                <a
                  href={ProfileDate.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-dark-orange py-2.5 px-10 rounded-lg font-medium text-lg wfit mx-auto"
                >
                  Resume
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;