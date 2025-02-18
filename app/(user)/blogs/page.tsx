import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { BiChevronRight } from 'react-icons/bi';
import styles from './page.module.css';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import ClientSideRoute from '@/app/components/ClientSideRoute';
import { Blog } from '@/typings';
const query = groq`*[_type=="post"] {
    ...,
    author->,
  } | order(_createdAt desc)`;
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, devops, and more.',
};
const BlogPage = async () => {
  const blogs = await client.fetch(query);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1>
      <ul role="list" className="divide-y divide-gray-300">
        {blogs.map((blog: Blog) => (
          <ClientSideRoute key={blog._id} route={`/blog/${blog.slug.current}`}>
            <li
              className={`flex justify-between gap-x-6 py-5  ${styles.blogContainer}`}
            >
              <div className="flex gap-x-4">
                <Image
                  alt="blog"
                  className="h-24"
                  style={{ objectFit: 'none' }}
                  src={urlForImage(blog.mainImage).url()}
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
                  </p>
                  {/* <p className="truncate text-xs leading-5 text-gray-500">
                    {blog._createdAt.slice(0, 10)}
                  </p> */}
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end transition-all duration-500 delay-300">
                <div className={styles.blogDuration}>
                  <p className={`text-sm leading-6 text-gray-400 pr-2 `}>
                    {blog.duration} read
                  </p>
                  <BiChevronRight className={styles.arrow} />
                </div>
              </div>
            </li>
          </ClientSideRoute>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
