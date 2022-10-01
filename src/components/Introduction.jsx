import React from "react";
import PageSection from "./PageSection";

import { FaDatabase, FaJava, FaReact, FaGit } from "react-icons/fa";

const Introduction = () => {
  const introduction = [
    {
      id: 1,
      icon: <FaReact size={50} className="text-white" />,
      title: "Frontend Development",
      subtitle:
        "I worked 2 big ReactJS projects that were about E-Archive and E-Ledger Web Application.And now,I'm coding with JSF at Sovos.",
    },
    {
      id: 2,
      icon: <FaJava size={50} className="text-white" />,
      title: "Backend Java Development",
      subtitle:
        "I worked 5 big Java project.For example;Digital Planet E-ledger project's migration for Vodafone,Coding E-ledger Project with Spring Boot and Gradle... ",
    },
    {
      id: 3,
      icon: <FaDatabase size={50} className="text-white" />,
      title: "Database",
      subtitle:
        "I have used 3 different databases many times.PostgreSQL,OracleDB,MySQL.",
    },
    {
      id: 4,
      icon: <FaGit size={50} className="text-white" />,
      title: "Git",
      subtitle:
        "I have used a lot of git systems.GitLab,GitHub,Bitbucket and Azure.",
    },
  ];

  return (
    <PageSection
      name="Introduction"
      title="Introduction"
      subtitle={`If I had to briefly introduce myself..`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {introduction.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Introduction;
