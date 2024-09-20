import propertyManager from '../../images/projects/propertyManager.png';
import fitlab from '../../images/projects/fitlab.png';
import itSolution from '../../images/projects/itSolution.png';
import FeaturedProject from '@/app/components/FeaturedProjects';
import Project from '@/app/components/Project';

export default function Page() {
  const projects = [
    {
      name: 'Property Manager',
      description: [
        'A web application for managing your property',
        'user authentication and authorization features with JWT token, including secure user registration and login functionality with encrypted user information using bcrypt',
        'Utilized RESTful API with Mongoose for efficient storage and retrieval of data',
      ],
      tags: ['React', 'Typescript', 'MUI', 'Node', 'MongoDB', 'JWT'],
      links: {
        github: 'https://github.com/ReshadSadik/property-manager',
        live: 'https://property-manager-ls.vercel.app/',
      },
      image: propertyManager,
    },
    {
      name: 'FitLab',
      description: [
        'A web application for managing your property',
        'A web application for managing your property',
        'user authentication and authorization features with JWT token, including secure user registration and login functionality with encrypted user information using bcrypt',
      ],

      tags: ['React', 'Redux', 'TailwindCSS', 'Express', 'Firebase'],
      links: {
        github: 'https://github.com/ReshadSadik/fitlab_client',
        live: 'https://fiitlab.netlify.app/',
      },
      image: fitlab,
    },
    {
      name: 'IT Solutions',
      description: ['A web application for managing your property'],

      tags: ['HTML', 'CSS', 'Javascript'],
      links: {
        github: 'https://github.com/ReshadSadik/IT_SOLUTIONS',
        live: 'https://reshadsadik.github.io/IT_SOLUTIONS/',
      },
      image: itSolution,
    },
  ];

  return (
    <>
      <div
        className={
          'flex flex-col items-center max-w-[1000px] md:pb-32 pb-14 w-full'
        }
      >
        <div className={'flex items-center w-full header-line pb-1'}>
          <h3 className={'text-2xl whitespace-nowrap slate font-[600]'}>
            Some Things I&#8242;ve Built
          </h3>{' '}
          <hr className="w-full  border-green-600 ml-4 border-1" />
        </div>
        {projects.map((p, i) => {
          return (
            <FeaturedProject
              key={p.name}
              image={p.image.src}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}
      </div>
      <div className={'flex flex-col items-center max-w-[1000px] pb-32 w-full'}>
        <div
          className={'flex flex-col items-center justify-center w-full pb-16'}
        >
          <h3 className={'text-2xl slate mb-[10px] font-[600]'}>
            Other Noteworthy Projects
          </h3>
          <a
            href={'https://github.com/ReshadSadik'}
            className={'accent text-sm font-monospace'}
          >
            view the archive
          </a>
        </div>
        <div className={'grid md:grid-cols-3 gap-4 w-full'}>
          <Project
            title={'Amazon web Scraper'}
            description={
              'You can scrape any data depending on keywords or category'
            }
            links={'https://github.com/ReshadSadik/amazon-web-scraper'}
            tags={['Nodejs', 'Puppeteer', 'Cheerio', 'request', 'REST']}
          />
          <Project
            title={'Docket - Cloud based note application'}
            description={
              'A simple & secure note taking application with ExpressJS backend connected with Postgres SQL.'
            }
            links={{ 'fab fa-github': '' }}
            tags={['React', 'Express', 'Postgres']}
          />
          <Project
            title={'GiftLawn'}
            description={'A gift suggestion website for your loved ones'}
            links={'https://www.giftlawn.com/'}
            tags={['Wordpress', 'Javascript', 'CSS']}
          />
        </div>
      </div>
    </>
  );
}
