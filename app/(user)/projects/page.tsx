"use client";
import propertyManager from "../../images/projects/propertyManager.png";
import SpotifyProfile from "../../images/projects/SpotifyProfile.png";
import Journal from "../../images/projects/journal.png";
// import Project from "../components/Projects";
import { useState } from "react";
import FeaturedProject from "@/app/components/FeaturedProjects";

export default function Page() {
  const [projects, setProjects] = useState([
    {
      name: "Property Manager",
      description: [
        "A web application for managing your property",
        "user authentication and authorization features with JWT token, including secure user registration and login functionality with encrypted user information using bcrypt",
        "Utilized RESTful API with Mongoose for efficient storage and retrieval of data",
      ],
      tags: ["React", "Typescript", "MUI", "Node", "MongoDB", "JWT"],
      links: {
        github: "https://github.com/ReshadSadik/property-manager",
        live: "https://property-manager-ls.vercel.app/",
      },
      image: propertyManager,
    },
    {
      name: "SysMon - System Monitoring",
      description: [
        "A web application for managing your property",
        "A web application for managing your property",
        "user authentication and authorization features with JWT token, including secure user registration and login functionality with encrypted user information using bcrypt",
      ],

      tags: ["Python-Flask", "React", "Tailwind", "Sockets"],
      links: {
        "fab fa-github": "https://github.com/ishwarjagdale/sys.mon",
        "fas fa-external-link": "https://sys-mon.pages.dev/",
      },
      image: SpotifyProfile,
    },
    {
      name: "Journal - Medium Clone",
      description: ["A web application for managing your property"],

      tags: ["React", "Python", "Postgres", "Google Cloud"],
      links: { "fab fa-github": "https://github.com/ishwarjagdale/journal" },
      image: Journal,
    },
  ]);

  return (
    <>
      <div className={"flex flex-col items-center max-w-[1000px] pb-32 w-full"}>
        <div className={"flex items-center w-full header-line pb-1"}>
          <h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>
            Some Things I've Built
          </h3>{" "}
          <hr className="w-full  border-green-600 ml-4 border-1" />
        </div>
        {projects.map((p, i) => {
          return (
            <FeaturedProject
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
      <div className={"flex flex-col items-center max-w-[1000px] pb-32 w-full"}>
        <div
          className={"flex flex-col items-center justify-center w-full pb-16"}
        >
          <h3 className={"text-2xl slate mb-[10px] font-[600]"}>
            Other Noteworthy Projects
          </h3>
          <a
            href={"https://github.com/ishwarjagdale"}
            className={"accent text-sm font-monospace"}
          >
            view the archive
          </a>
        </div>
        {/* <div className={"grid md:grid-cols-3 gap-4 w-full"}>
                    <Project
                        title={"SysMon's Backend Server"}
                        description={"SysMon applications backend server made with Python. "}
                        links={{"fab fa-github": "https://github.com/ishwarjagdale/sys.mon"}}
                        tags={["Python-Flask", "Threading", "Postgres", "Sockets", "REST"]}
                    />
                    <Project
                        title={"Docket - Cloud based note application"}
                        description={"A simple & secure note taking application with ExpressJS backend connected with Postgres SQL."}
                        links={{"fab fa-github": "https://github.com/ishwarjagdale/docket"}}
                        tags={["React", "Express", "Postgres"]}
                    />
                    <Project
                        title={"Apple Airpods Website Clone"}
                        description={"An attempt to clone Apple's airpods animation by applying lottie animation on a custom a 3D phone model."}
                        links={{"fab fa-github": "https://github.com/ishwarjagdale/lottie-animation", "fas fa-external-link": "https://ishwarjagdale.github.io/lottie-animation"}}
                        tags={["Lottie Animation", "Javascript", "CSS"]}
                    />
                </div> */}
      </div>
    </>
  );
}
