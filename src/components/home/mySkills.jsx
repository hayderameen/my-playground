import React from "react";

// Importing CSS
import "../../css/home/mySkills.css";

const MySkills = () => {
  return (
    <section id="my-skills-cover">
      <h1 id="my-skills-heading">My Skills</h1>
      <div className="ticker" id="ticker1">
        <h1>Responsive Web Design</h1>
      </div>
      <div className="ticker" id="ticker2">
        <h1>Creative &amp; Smooth Experience</h1>
      </div>
      <div className="ticker" id="ticker3">
        <h1>Dynamic Animations for UI/UX</h1>
      </div>
      <div className="ticker" id="ticker4">
        <h1>Scalable RESTful APIs in back-end</h1>
      </div>
    </section>
  );
};

export default MySkills;
