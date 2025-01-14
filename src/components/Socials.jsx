import React from "react";
import ContactData from "../data/contact";

const Socials = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="flex gap-5 my-4"
    >
      {ContactData?.links?.map((link, idx) => (
        <a
          key={idx}
          className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
