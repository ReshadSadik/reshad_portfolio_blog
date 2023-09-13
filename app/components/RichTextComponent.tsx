import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full  mt-10 mb-5 mx-auto ">
          <Image
            className="object-contain mx-auto shadow shadow-1"
            src={urlForImage(value).url()}
            alt="blog image"
            width={650}
            height={200}
          />
        </div>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-2xl pt-10 pb-5 font-bold">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="text-xl pt-10 pb-6  font-bold">{children}</h1>
    ),
    h4: ({ children }: any) => <h1 className="text-md pt-7 ">{children}</h1>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#36B063] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
    helper: ({ children }: any) => <span className="pt-7">{children}</span>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className=" decoration-[#F7ab0A] hover:underline hover:decoration-red "
        >
          {children}
        </Link>
      );
    },
  },
};
