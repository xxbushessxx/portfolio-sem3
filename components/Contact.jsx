import React from "react";

const Contact = () => {
  return (
    <>
      <div className="max-width-[900px] mx-48 ">
        <h2 className="mt-2 mb-8 flex items-center text-3xl justify-center">
          <span className="font-black">Contact</span>
        </h2>
        <div className="mx-40 space-y-9 flex flex-col items-center justify-center">
          <h2 className="mt-2 mb-2 flex capitalize justify-center">
            <span className="text-3xl">Get in touch</span>
          </h2>
          <p className="text-center">
            I am seeking an internship opportunity and am interested in
            connecting with potential employers. I am ambitious and motivated,
            and believe an internship will allow me to learn and grow. Please
            feel free to contact me if you are interested in discussing
            potential opportunities. I am excited at the possibility of working
            with your organization and contributing to its success.
          </p>
          <a href="mailto:i487944@fhict.nl?subject=Internship" class="py-2 px-4 font-mono border border-blue-400 text-blue-400 hover:bg-primary/10">Contact me</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
