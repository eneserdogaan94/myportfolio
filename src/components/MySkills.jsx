import React from "react";
import PageSection from "./PageSection";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import sovos from "../assets/sovos-logo.png";
import dp from "../assets/Digital-Planet-Transparan-Logo.png";
import azure from "../assets/azure.png";
import bitbucket from  "../assets/bitbucket.png";
import java from "../assets/java.png";
import jsf from "../assets/java-jsf.png"
import rabbitmq from "../assets/rabbitmq.png"
import postgresql from "../assets/postgresql.png"
import oracledb from "../assets/oracledb.png"


const MySkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "github",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: jsf,
      title: "JSF",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: bitbucket,
      title: "Bitbucket",
      style: "shadow-red-400",
    },
    {
      id: 12,
      src: azure,
      title: "Microsoft Azure",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: rabbitmq,
      title: "RabbitMQ",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-pink-400",
    },
    {
      id: 15,
      src: oracledb,
      title: "Oracle SQL",
      style: "shadow-red-400",
    },
  ];

  const companies = [
    {
      id: 1,
      src:sovos ,
      title: "Sovos",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: dp,
      title: "Digital Planet",
      style: "shadow-red-500",
    },
  ];

  return (
    <PageSection
      name="experience"
      title="My Skills"
      subtitle={`These are the technologies I've worked with`}
    >
      <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
<PageSection name="experience"
      title="My Experience"
      subtitle={`These are the companies I've worked for`}>
<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {companies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
</PageSection>

      </>
    </PageSection>
  );
};

export default MySkills;
