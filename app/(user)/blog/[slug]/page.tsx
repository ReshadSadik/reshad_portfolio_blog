import { RichTextComponent } from '@/app/components/RichTextComponent';
import styles from './page.module.css';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { Blog } from '@/typings';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const query = groq`*[_type=="post" && slug.current==$slug][0] {
        ...,
        author->,
        categories[]->
      }`;
  const post = await client.fetch(query, { slug: params.slug });
  console.log(post.slug.current);

  // let ogImage = urlForImage(post?.mainImage).url() ;

  return {
    title: post.title,
    description: 'first description',
    openGraph: {
      title: post.title,
      description: 'second description',
      type: 'article',
      url: `https://madebyreshad.com/blog/${post.slug.current}`,
      images: [
        {
          url: urlForImage(post?.mainImage).url(),
        },
      ],
    },
  };
}

// export async function metadata  ({ params: { slug } }: Props) {
//   const query = groq`*[_type=='post']{
//         slug
//     }`;
//   const blog: Blog = await client.fetch(query, { slug });

//   return {
//     title: blog.title,
//     description: blog.description,
//     openGraph: {
//       title: blog.title,
//       description: blog.category,
//       type: 'article',
//       publishedTime: blog._updatedAt,
//       url: `https://madebyreshad.com/blog/${blog.slug}`,
//       images: [
//         {
//           url: urlForImage(blog?.mainImage).url(),
//         },
//       ],
//     },
//   };
// };
async function Blog({ params: { slug } }: Props) {
  const query = groq`*[_type=="post" && slug.current==$slug][0] {
        ...,
        author->,
        categories[]->
      }`;

  const blog: Blog = await client.fetch(query, { slug });
  return (
    <article>
      <section>
        <div className="relative min-h-56 flex max-w-[700px] flex-col md:flex-row justify-between">
          <div className="w-full h-full  pb-6">
            <div className={styles.blogHeader}>
              <p>{blog._createdAt.slice(0, 10)}</p>
              <span>{blog.duration} read</span>
              <span>{blog.category}</span>
            </div>
            <h1 className="text-center text-4xl font-bold pt-3 pb-5">
              {blog.title}
            </h1>
            <p className="text-center text-gray-400 text-md pb-7">
              {blog.motivation}
            </p>
            <Image
              src={urlForImage(blog?.mainImage).url()}
              alt={blog.author.name}
              width={700}
              height={200}
            />
            <PortableText value={blog.body} components={RichTextComponent} />
            <div className="mx-0 auto text-center mt-20 ">
              <h6 className="font-bold">Published by :</h6>
              <Image
                width={60}
                height={60}
                className="w-10 rounded-full mx-auto my-4"
                src={urlForImage(blog.author.image.asset).url()}
                alt=""
              />
              {blog.author.name}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Blog;
