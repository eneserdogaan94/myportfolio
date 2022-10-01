import React from "react";

import codeImage from "../assets/code.jpg";
import PageSection from "./PageSection";

const About = () => {
  return (
    <PageSection
      name="about me"
      title="Who Am I?"
      subtitle={`I'm Sotware Developer and I love my job. :) `}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          I am working at sovos as a full stack software developer for 2 years.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          These are the technologies I've worked with JSF,ReactJS,JAVA,Spring Boot,Azure,OracleSQL and Jira. 
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          I have been working with agile software development for a long time. That's why I have a production that gets along very well with my team and managers and raises the white flag when necessary.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          I believe that there is no technology that cannot be learned with the necessary perseverance and determination. For this reason, I always have a structure that takes responsibility.
          </p>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default About;
