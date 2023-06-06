import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { BiChevronRight } from "react-icons/bi";
import styles from "./page.module.css";
import Image from "next/image";
const query = groq`*[_type=="post"] {
    ...,
    author->,
  } | order(_createdAt desc)`;

const BlogPage = async () => {
  const blogs = await client.fetch(query);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1>
      <ul role="list" className="divide-y divide-gray-300">
        {blogs.map((blog: any) => (
          <li
            key={blog._id}
            className={`flex justify-between gap-x-6 py-5  ${styles.blogContainer}`}
          >
            <div className="flex gap-x-4">
              <Image
                alt="resh"
                className="h-24"
                src="https://i.ibb.co/xzbd1YS/image-19.png"
                width={160}
                height={100}
                priority
              />
              <div className="min-w-0 flex-auto">
                <p
                  className={`text-md font-semibold leading-6 text-gray-900 ${styles.blogTitle}`}
                >
                  {blog.title}
                </p>
                <p className="my-2 fw-bold max-w-lg  text-sm leading-5 text-gray-800">
                  {blog.description}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid dolorum exercitationem laudantium quae, vitae officia
                  perspiciatis,
                </p>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {blog._createdAt.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end transition-all duration-500 delay-300">
              <div className={styles.blogDuration}>
                <p className={`text-sm leading-6 text-gray-400 pr-2 `}>
                  10 mins read
                </p>
                <BiChevronRight className={styles.arrow} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
