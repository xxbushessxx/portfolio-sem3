import React from "react";

const About = () => {
  return (
    <>
      <div className="max-width-[900px] mx-48">
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
              <li>Something 1</li>
              <li>Something 2</li>
              <li>Something 3</li>
              <li>Something 4</li>
              <li>Something 5</li>
              <li>Something 6</li>
            </ul>
          </div>
          {/* right */}
          <div className="flex flex-col">
          <img src="/profile.jpeg" className="w-[1000px] rounded-3xl"/> 
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
