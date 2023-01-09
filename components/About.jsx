import React from "react";

const About = () => {
  return (
    <>
    <section className="mx-14 flex h-screen flex-col items-start justify-center p-0">
     
        <h2 className = "mt-2 mb-8 flex items-center text-4xl">
          <span className="font-black">About me</span>
        </h2>
        <div className=" flex flex-row ">
          {/* left */}
          <div className="flex flex-col space-y-4 mr-14 ">
            <p className="text-justify">
              My name is Erik Nikolov and I am a national swimming champion at
              freestyle in 50 meters. Because I have a broad scope of interests,
              this allows me to be immensely creative, which will contribute to
              the success of my career. I have understood from a very young age
              that inventing or problem-solving different issues is bringing me
              the most joy.
            </p>
            <p>My current technology stack consists of:</p>
            <ul className="inline-list grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-1 font-serif text-base text-foreground-dim">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          {/* right */}
          <div className="flex flex-col">
          <img src="/profile.jpeg" className="w-[1000px] rounded-3xl"/> 
            
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
