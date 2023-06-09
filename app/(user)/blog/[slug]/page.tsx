import { RichTextComponent } from '@/app/components/RichTextComponent';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import next from 'next/types';
import React from 'react';

type Props={
    params:{
        slug:string;
    }
}

export async function generateStaticParams() {
    
    const query= groq`*[_type=='post']{
        slug
    }`;

    const slugs = await client.fetch(query,{ next:{  revalidate : 30 }});
    const slugRoutes=slugs.map((slug:any)=>slug.slug.current);

    return slugRoutes.map((slug:any)=>({
        slug: slug
    }))
}

 async function Blog({params:{slug}}:Props) {
    const query = groq`*[_type=="post" && slug.current==$slug][0] {
        ...,
        author->,
        categories[]->
      }`;

      const blog = await client.fetch(query,{slug});
    return (
        <article>
            <section>
                <div className='relative min-h-56 flex flex-col md:flex-row justify-between' >
                    <div className='w-full h-full  p-10'>
                        <Image src={urlForImage(blog?.mainImage).url()}
                            alt={blog.author.name}
                           width={700}
                           height={200}
                            />
                            <PortableText value={blog.body} components={RichTextComponent}/>
                      
                    </div>

                </div>
            </section>
            post {slug}
        </article>
    );
};

export default Blog;