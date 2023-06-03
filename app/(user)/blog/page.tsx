import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[_type=="post"] {
    ...,
    author->,
  } | order(_createdAt desc)`;

const BlogPage = async () => {
  const blogs = await client.fetch(query);
  console.log(blogs);

  return <div>this is where all my blogs are</div>;
};

export default BlogPage;
