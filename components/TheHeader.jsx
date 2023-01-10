import React from 'react';

const TheHeader = () => {
  const links = [
    { to: '#home', name: 'Home', isButton: false },
    { to: '#about', name: 'About', isButton: false },
    { to: '#experience', name: 'Experience', isButton: false },
    { to: '#contact', name: 'Contact', isButton: false },
    {
      to: '/resume.pdf',
      name: 'Resume',
      isButton: true,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-20 flex h-24 w-full items-center justify-end bg-background-bright bg-opacity-80 px-12 backdrop-blur">
        <nav className="flex items-center align-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.to}
              target={link.to.startsWith('#') ? '_self' : '_blank'}
              className={
                link.isButton
                  ? 'inline-flex cursor-pointer place-content-center rounded border border-primary py-2 px-4 font-sans text-primary hover:bg-primary/10'
                  : 'text-foreground hover:text-primary'
              }
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
