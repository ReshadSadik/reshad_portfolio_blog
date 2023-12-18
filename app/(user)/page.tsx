import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BiStats } from 'react-icons/bi';
import ResumeDownloadButton from '../components/ResumeDownloadButton';

export default async function Home() {
  return (
    <section className="flex flex-col justify-between">
      <h1 className="font-bold text-3xl text-left ">Reshad Sadik</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-800">
        Hey, Im Reshad. <b> Frontend Developer </b>
        at SJ Innovation LLC. <br />
        Next | Open source contributor | Networking enthusiast | AWS
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="resh"
          className="rounded-full grayscale"
          src="https://i.ibb.co/NCYnsgd/fotor-2023-6-4-4-18-30.png"
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/reshad"
            className="flex items-center gap-2"
          >
            {/* <TwitterIcon /> */}
            200
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ReshadSadik"
            className="flex items-center gap-2"
          >
            <BsGithub className="mr-1 text-xl" />
            {` 48 public repos`}
          </a>
          <Link href="/blogs" className="flex items-center">
            <BiStats className="mr-3 text-xl" />
            {`2600 blog views all time`}
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-800">
        Im an full stack developer experienced on creating web apps using React,
        Next.js, Nodejs.
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-8 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li className="flex items-center hover:text-neutral-700 dark:hover:text-green-600 transition-all cursor-pointer">
          <BsArrowUpRight />
          <ResumeDownloadButton />
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-green-600 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bd.linkedin.com/in/reshadsadik"
          >
            <BsArrowUpRight />
            <p className="h-7 pl-2">find me on LinkedIn</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
