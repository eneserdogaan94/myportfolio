import React from "react";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "My Contact Email Adress",
      subMenu: [
        {
          id: 1,
          title: "eneserdogaan94@gmail.com",
        },
        {
          id: 2,
          title: "enes.erdogan@digitalplanet.com",
        },
        {
          id: 3,
          title: "enes.erdogan@sovos.com",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="my-12 text-center text-sm text-thBlue">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-lg font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="my-12 text-center text-sm text-thBlue">
          © eneserdogan
        </p>
      </div>
    </div>
  );
};

export default Footer;
