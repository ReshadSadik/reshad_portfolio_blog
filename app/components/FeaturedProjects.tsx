import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";

export default function FeaturedProject({
  image,
  title,
  description,
  tags,
  links,
  orientation = 1,
}: any) {
  return (
    <div
      className={
        "flex items-center w-full relative h-[400px] mb-[20px] border border-slate-700 md:border-0 drop-shadow md:drop-shadow-none  "
      }
    >
      <div
        className={` transition ease-in-out  md:max-w-[59%] absolute ${
          orientation ? "left-0" : "right-0"
        } h-full md:h-auto md:w-full group hover:z-20 hover:md:scale-110`}
      >
        <div
          className={
            "w-full h-full absolute top-0 bg-black opacity-20 brightness-50 group-hover:hidden z-10 "
          }
        />
        <img
          src={image}
          className={`blur-sm brightness-50 h-full md:brightness-100 md:blur-0 object-cover md:object-contain drop-shadow-2xl`}
          alt={"Hal"}
        />
      </div>
      <div
        className={`flex flex-col p-8 md:p-0 z-10 ${
          orientation ? "ml-auto md:items-end" : "md:items-start"
        } w-full md:w-fit group-hover:-z-10 `}
      >
        <span
          className={
            "font-monospace text-sm cursor-default text-green-600 accent mb-2"
          }
        >
          Featured Project
        </span>
        {/* <a href={Object.values(links)[0]}> */}
        <a href="/">
          <h3
            className={"cursor-pointer slate hover-accent text-2xl font-[600]"}
          >
            {title}
          </h3>
        </a>
        <div
          className={`cursor-default md:bg-[#FCFCFC] rounded py-6 md:px-6 max-w-[500px] dark-slate  text-[15px]  text-justify my-4 drop-shadow-xl`}
        >
          {description.map((desc: any) => (
            <ul className="pl-2">
              <li className="list-disc mt-2">{desc}</li>
            </ul>
          ))}
        </div>
        <ul
          className={
            "flex flex-wrap cursor-default max-w-[500px] items-center text-sm my-1 dark-slate font-monospace whitespace-nowrap mt-2"
          }
        >
          {tags.map((t: any, i: any) => {
            return (
              <li
                key={i}
                className={`mr-5 md:mr-0 hover:text-orange-500 ${
                  orientation ? "md:ml-5" : `md:mr-5`
                }`}
              >
                {t}
              </li>
            );
          })}
        </ul>
        <div
          className={
            "flex flex-wrap items-center text-lg mt-4 dark-slate gap-4"
          }
        >
          {links.github ? (
            <a href={links.github} target="_blank">
              <BsGithub className="project-icons hover:text-green-600" />
            </a>
          ) : (
            ""
          )}
          {links.live ? (
            <a href={links.live} target="_blank">
              <BsBoxArrowInUpRight className="project-icons hover:text-green-600" />
            </a>
          ) : (
            ""
          )}
          {/* {Object.keys(links).map((l, i) => {
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return (
              <a
                key={i}
                target={"_blank"}
                href={links[l]}
                className={`hover-accent mr-6 ${l} ${
                  i === (!orientation ? 0 : Object.keys(links).length - 1)
                    ? "md:mr-0"
                    : "md:mx-6"
                }`}
              >
                <BsGithub />
              </a>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
