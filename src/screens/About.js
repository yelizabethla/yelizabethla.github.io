import aboutEntries from "../entries/aboutEntries";
import { useEffect } from 'react';

function CustomBullets() {
  return (
    aboutEntries.bullets.map((bullet, index) => {
      return (
        <div key={index} className="flex flex-nowrap gap-4 md:items-center">
          <div className="text-[2rem]">{bullet.emoji}</div>
          <>{bullet.text}</>
        </div>
      );
    })
  );
}

function About() {
  useEffect(() => {
    document.title = 'Ellie La - About';
  });

  return (
    <div className="App">
      <div className="container p-8">
        <div className="about-wrapper flex flex-wrap max-w-full lg2:flex-nowrap lg2:max-w-[76rem] justify-center gap-16 py-4 xs:px-8">
          <div className="max-w-sm aspect-square">
            <img className="min-w-[16rem] object-cover aspect-square rounded-full" src={aboutEntries.image} alt={aboutEntries.title} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="h2">{aboutEntries.title}</div>
            <div className="whitespace-pre-line">{aboutEntries.description}</div>
            <CustomBullets />
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;