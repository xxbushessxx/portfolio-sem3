import React from 'react';

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="mb-20 flex max-w-[600px] flex-col items-center justify-center"
      >
        <h2 className="mt-2 mb-2 flex capitalize">
          <span className="font-mono text-sm text-secondary">
            {' '}
            What's next?{' '}
          </span>
        </h2>
        <h2 className="mt-2 mb-6 flex capitalize">
          <span className="text-4xl font-black">Get in touch</span>
        </h2>
        <p>
          Currently seeking an <strong>internship</strong> opportunity and am
          interested in connecting with potential <strong>employers</strong>. I
          am <strong>ambitious</strong> and <strong>motivated</strong>, and
          believe an internship will allow me to learn and grow. Please feel
          free to contact me if you are interested in discussing potential
          opportunities. I am excited at the possibility of working with{' '}
          <strong>your organization</strong> and contributing to its{' '}
          <strong>success</strong>.
        </p>
        {/* link to my email */}
        <a
          href="mailto:nikoloverik@gmail.com"
          className="mt-10 capitalize inline-flex cursor-pointer place-content-center rounded border border-primary py-2 px-4 font-sans text-primary hover:bg-primary/10"
        >
          Contact me
        </a>
      </section>
    </>
  );
};

export default Contact;
