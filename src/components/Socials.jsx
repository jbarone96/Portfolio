import React from "react";
import ContactData from "./Contact";

const Socials = () => {
  return (
    <div>
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
