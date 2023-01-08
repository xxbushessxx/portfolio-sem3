import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="mx-14 flex h-screen flex-col items-start justify-center p-0">
        <p className="mb-4 ml-2 text-primary">Hello! My name is</p>
        <h1 className="text-6xl font-black leading-tight">Erik Nikolov</h1>
        <p className="text-5xl font-black leading-tight text-neutral-600">
          I design.
        </p>
        <p className="mt-4 text-lg max-w-lg">
          I'm a Computer Science student @{' '}
          <a href="https://fontys.edu/" className="text-sky-500">
            Fontys
          </a>
          . I'm also a competitive swimmer and specialize in digital design.
          Currently I'm focused on finishing my studies but am also{' '}
          <em>looking for an internship</em>!
        </p>
      </section>
    </>
  );
};

export default Hero;
