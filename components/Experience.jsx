import React from 'react';

const Experience = () => {
  const projects = [
    {
      name: 'Weather API',
      description:
        'Website which shows the weather forecast in your selected city.',
      technologies: ['JS'],
      source: 'https://git.fhict.nl/I487944/weather-api',
    },
    {
      name: 'Guess My Number',
      description: 'A simple number guessing game.',
      technologies: ['JS'],
      source: 'https://git.fhict.nl/I487944/guess-my-number',
    },
  ];

  return (
    <>
      <section id="experience" className="my-0 mx-auto py-[6.5rem] max-w-3xl">
        <h2 className="heading-line mt-2 mb-8 flex items-center text-2xl font-black">
          Projects I've built
        </h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              className="project-card h-full rounded text-foreground bg-background-bright p-6 shadow-md hover:shadow-lg"
              key={project.name}
            >
              <header className="mb-6 flex items-center justify-between">
                <h4 className="text-lg text-primary font-extrabold">
                  {project.name}
                </h4>
                <div className="inline-flex space-x-4 text-xl">
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25em"
                        height="1.25em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6.75 11.5c2.75 0 3.49-2.03 3.68-3.1c.91-.29 1.57-1.14 1.57-2.15C18 7 17 6 15.75 6S13.5 7 13.5 8.25c0 .94.57 1.75 1.39 2.08C14.67 11 14 12 12 12c-1.38 0-2.34.35-3 .84V8.87c.87-.31 1.5-1.14 1.5-2.12c0-1.25-1-2.25-2.25-2.25S6 5.5 6 6.75c0 .98.63 1.81 1.5 2.12v6.26c-.87.31-1.5 1.14-1.5 2.12c0 1.25 1 2.25 2.25 2.25s2.25-1 2.25-2.25c0-.93-.56-1.75-1.37-2.07c.28-.68 1.1-1.68 3.62-1.68m-4.5 3a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m0-10.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m7.5 1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75Z"
                        />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25em"
                        height="1.25em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </header>
              <main>
                <p className="text-sm tracking-tight">{project.description}</p>
              </main>
              <footer>
                <ul className="invisible-scroll mt-4 space-x-4 overflow-scroll font-mono text-[0.7rem] font-thin text-foreground-dim">
                  {project.technologies.map((technology) => (
                    <li className="inline" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
