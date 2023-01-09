import React from 'react';

const About = () => {
  return (
    <>
      <section id="about" className="max-w-[900px]">
        <h2 className="heading-line mt-2 mb-8 flex items-center text-2xl font-black">
          About me
        </h2>
        <div className="flex flex-row">
          {/* left */}
          <div className="flex flex-col space-y-4 mr-14 ">
            <p className="text-justify">
              My name is Erik Nikolov and I'm a national swimming champion at
              freestyle in 50 meters. I have realized at a very young age that
              inventing useful tools and problem solving diverse issues is what
              brings me the most joy in life. My broad scope of interests allows
              me to be immensely creative serves as one of the pillars for
              success in my career.
            </p>
            <p>My current technology stack consists of:</p>
            <ul className="inline-list flex flex-col gap-x-2 gap-y-1 font-serif text-base text-foreground-dim">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          {/* right */}
          <div>
            <img src="/profile.jpeg" className="w-[1000px] rounded-3xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
