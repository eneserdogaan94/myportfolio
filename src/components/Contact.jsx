import React from "react";
import PageSection from "./PageSection";

import contactImage from "../assets/contact-us.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`As I continue my development with perseverance and determination, I am really interested in what you will ask me on this path. 

  `}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}

        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt="contact us"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />

          <p className=" py-12 max-w-md">          
            You can reach me by filling out the form or by email. My e-mail: eneserdogaan94@gmail.com
          </p>

          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
          </div>
        </div>

        {/* right */}

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
