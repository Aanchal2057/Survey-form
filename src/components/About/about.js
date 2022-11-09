import React from "react";

const About = () => {
  return (
    <section id="about">
    <div class="d-flex flex-row">
      <div class="p-5 col-7 text-center">
        <h4 className="my-5">About Us:</h4>
        <p className="m-5" style={{ fontSize: 24 }}>
          This website is helpful for conducting surveys for non-profit
          organizations. It provide all the necessary question types that is
          required for conducting fellowship programs and suverys on various
          community related issues.
        </p>
      </div>
      <div class="p-2 col-4">
        <img
          src={process.env.PUBLIC_URL + "/logo.jpeg"}
          alt=""
          height="500px"
          width="500px"
        />
      </div>
    </div>
    </section>
  );
};

export default About;