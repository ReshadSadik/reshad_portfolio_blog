'use client';
import { useState } from 'react';

const page = () => {
  type WorkType = {
    [key: string]: {
      url: string;
      position: string;
      duration: string;
      content: string[];
    };
  };

  const [work, setWork] = useState<WorkType>({
    'SJ Innovation LLC. New York': {
      url: '#',
      position: 'Software Developer',
      duration: 'july 2022 - Present',
      content: [
        `Developed complex frontend in ReactJs, NextJs with typescript to create interactive, user friendly UI.
Integrating with NodeJs, Sanity CMS backend while maintaining clean architecture.`,
        `Worked on AI based project for removing background, generate new images with stable diffusion and midjourney api, text to video implementation using pictory.ai`,
        `Maintained clean code with proper documentation to Improve website usability and performance by
implementing front-end optimization techniques.`,
        `Built an internal tool for a pharmaceutical company using Retool and mysql .`,
        `Received recognition for the successful completion of the application, Collaborated with designers and team lead for planning and analyzing as part of the R&D of projects to
deliver high-quality web solutions.`,
      ],
    },
    'ManaknightDigital Inc.': {
      url: 'https://oasisinfobyte.com/',
      position: 'Full Stack Web Developer',
      duration: ' 2021 - June 2022',
      content: [
        'Built projects using concepts of OOPs',
        'Completed projects like ATM Machine, Number Guessing Game and fulfilled all the requirements as stated',
      ],
    },
    'Triceria Solutions': {
      url: 'https://rinex.ai/',
      position: 'Intern React Developer',
      duration: '2019 - 2020',
      content: [
        'Worked as the only web developer in a team of 12',
        'Developed an event website for inter-state hackathon which we conducted',
      ],
    },
  });
  type CertificationType = {
    [key: string]: {
      url: string;
      provider: string;
      font: string;
    };
  };
  const [certifications, setCertifications] = useState<CertificationType>({
    'Automating Real-World Tasks with Python': {
      url: 'https://coursera.org/share/3d778b5a6dd8449da384fdd30f99a296',
      provider: 'Google & Coursera',
      font: 'google',
    },
    'From Data to Insights with Google Cloud': {
      url: 'https://www.coursera.org/account/accomplishments/specialization/LHTMWADX74T6',
      provider: 'Google & Coursera',
      font: 'google',
    },
    'Data Analysis with Python': {
      url: 'https://www.freecodecamp.org/certification/ishwarjagdale/data-analysis-with-python-v7',
      provider: 'FreeCodeCamp',
      font: 'free-code-camp',
    },
    'Scientific Computing with Python': {
      url: 'https://www.freecodecamp.org/certification/ishwarjagdale/scientific-computing-with-python-v7',
      provider: 'FreeCodeCamp',
      font: 'free-code-camp',
    },
    'JavaScript Algorithms and Data Structures': {
      url: 'https://www.freecodecamp.org/certification/ishwarjagdale/javascript-algorithms-and-data-structures',
      provider: 'FreeCodeCamp',
      font: 'free-code-camp',
    },
    'Responsive Web Design': {
      url: 'https://www.freecodecamp.org/certification/ishwarjagdale/responsive-web-design',
      provider: 'FreeCodeCamp',
      font: 'free-code-camp',
    },
  });

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        className={
          'flex flex-col text-left items-center max-w-[1000px] pb-32 w-full'
        }
      >
        <div className={'flex items-center w-full header-line pb-16'}>
          <span
            className={
              'text-[22px] whitespace-nowrap slate font-Poppins font-[600]'
            }
          >
            Experience & Achievements
          </span>
          <hr className="w-full  border-green-600 ml-4 border-1" />
        </div>
        <p className={'dark-slate w-full mb-2 leading-7'}>
          As in 2023, I have about 3 years of experience in development. I'm a
          self-learner, React, Node being my initial stack I further learned
          SQL, mongoDB and little bit of shell scripting. Currently focusing on
          networking and AWS.
        </p>
        <p className={'dark-slate w-full mb-4 leading-7'}>
          I've worked with APIs, cloud services and gained experience by
          building full stack web applications with variety of frameworks like{' '}
          <a href={'https://nextjs.org/'} target={'_blank'}>
            Next{' '}
          </a>{' '}
          and{' '}
          <a href={'https://expressjs.com/'} target={'_blank'}>
            Express.
          </a>{' '}
        </p>
        <div className={'flex flex-col md:flex-row w-full mt-12'}>
          <ul
            className={
              'flex md:flex-col text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-8 md:mb-0'
            }
          >
            {Object.keys(work).map((k, i) => {
              return (
                <li
                  onClick={() => setActiveTab(i)}
                  className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 
                                       md:border-l-2 ${
                                         activeTab === i ? 'active-item' : ''
                                       }`}
                >
                  {k}
                </li>
              );
            })}
          </ul>
          <div className={'p-2'}>
            {Object.keys(work).map((k, i: number) => {
              return (
                <div className={`${activeTab === i ? '' : 'hidden'}`}>
                  <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                    <span className={'slate mr-2'}>{work[k].position}</span>
                    <a href={work[k].url} className={'accent'}>
                      @ {k}
                    </a>
                  </div>
                  <span className={'slate text-sm font-monospace'}>
                    {work[k].duration}
                  </span>
                  <ul
                    className={
                      'flex flex-col bullet-list mt-4 max-w-[540px] slate-alt leading-6 text-sm'
                    }
                  >
                    {Object.values(work[k].content).map((v: any) => (
                      <li className={'mb-2 text-justify'}>{v}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className={'flex items-center justify-center w-full pt-28 pb-8'}>
          <h3 className={'text-2xl slate font-[600]'}>Certifications</h3>
        </div>
        <ul
          className={
            'flex w-full flex-col text-md slate font-monospace cert-list'
          }
        >
          {Object.keys(certifications).map((k, i) => {
            return (
              <li
                onClick={() => setActiveTab(i)}
                className={`p-3 px-6 cursor-pointer`}
              >
                <a
                  href={certifications[k].url}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <i
                    className={`mr-4 w-[20px] text-center accent fab fa-${certifications[k].font}`}
                  />
                  <span>{k}</span>
                  <span className={'ml-2 hidden md:block text-sm slate-alt'}>
                    - {certifications[k].provider}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default page;
