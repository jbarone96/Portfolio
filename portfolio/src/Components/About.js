import React from "react";
import Particle from "./Particle";

const About = () => {
  const text = `You're
    an
    idiiot`;

  return (
    <>
      <Particle />
      <h2 className="about">About Me</h2>
      {/* <p className="paragraph">
        Hello, my name is Jordan Barone and I am an aspiring software developer
        looking for that one life-changing breakthrough to kickstart my career
        in tech and land my first developer job!
      </p>
      <p className="paragraph">
        I have always been great with computers and technology and all my life,
        I have been somewhat of a perfectionist. I always put 110% in everything
        that I do and make sure that everything is how it is suppose to be. I
        ended up going to flight school right after I graduated college
      </p> */}
      <div className="paragraph">{text}</div>
    </>
  );
};

export default About;
