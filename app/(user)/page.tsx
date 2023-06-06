import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-between">
      <h1 className="font-bold text-3xl text-left ">Reshad Sadik</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        Hey, I'm Reshad. <b> Software Developer </b>
        at SJ Innovation LLC. <br />
        Open source contributor | Networking enthusiast | AWS
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
            href="https://twitter.com/leeerob"
            className="flex items-center gap-2"
          >
            {/* <TwitterIcon /> */}
            {`500 tweets all time`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leerob"
            className="flex items-center gap-2"
          >
            {/* <GitHubIcon /> */}
            {`100 stars on this repo`}
          </a>
          <Link href="/blog" className="flex items-center">
            {/* <ViewsIcon /> */}
            {`2600 blog views all time`}
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        I'm an full stack developer experienced on creating web apps using
        React, Next.js, Nodejs.
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            {/* <ArrowIcon /> */}
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            {/* <ArrowIcon /> */}
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
