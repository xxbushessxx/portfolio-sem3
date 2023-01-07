import React from 'react';

const TheHeader = () => {
  const links = [
    { to: '#home', name: 'Home' },
    { to: '#about', name: 'About' },
    { to: '#experience', name: 'Experience' },
    { to: '#contact', name: 'Contact' },
    { to: '/resume.pdf', name: 'Resume', classes: 'border rounded px-4 py-2' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-20 flex h-24 w-full items-center justify-end bg-background bg-opacity-80 px-12 backdrop-blur">
        <nav className="flex items-center align-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className={`hover:text-sky-500 hover:border-sky-500 ${
                link.classes ?? ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default TheHeader;
