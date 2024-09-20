import * as React from 'react';
import { NotionRenderer, BlockMapType } from 'react-notion';
import Link from 'next/link';
import { Project as ProjectCard } from '../../../components/work';
import { AuthorFooter } from '../../../components/author-footer';
import { getBlogTable, getPageBlocks, getPageViews } from '@/utils/blog';
import { Project } from '@/types/project';
import { dateFormatter } from '@/utils/helper';
import { toNotionImageUrl } from '@/utils/notion';
import { config } from '@/utils/congif';

interface PostProps {
  blocks: BlockMapType;
  post: Project;
  morePosts: Project[];
  postViewCount: number;
}

export async function generateStaticParams() {
  try {
    const table = await getBlogTable<Project>(config.notionProjectTableId);
    if (!table || table.length === 0) {
      console.warn('No blog posts found in the table');
      return [];
    }

    return table.map((item: Project) => ({
      projectSlug: item.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({
  params,
}: {
  params: { projectSlug: string };
}) {
  console.log('parameter', params);

  if (!params.projectSlug) {
    throw Error('No slug given');
  }

  try {
    const table = await getBlogTable<Project>(config.notionProjectTableId);
    const publishedProjects = table.filter((p: Project) => p.published);
    console.log(publishedProjects);

    const post = table.find((t: Project) => t.slug === params.projectSlug);
    if (!post || (!post.published && process.env.NODE_ENV !== 'development')) {
      throw Error(`Failed to find post for slug: ${params.projectSlug}`);
    }

    const postIndex = publishedProjects.findIndex(
      (t: Project) => t.slug === params.projectSlug
    );

    const morePosts = [...publishedProjects, ...publishedProjects].slice(
      postIndex + 1,
      postIndex + 3
    );

    const blocks = await getPageBlocks(post.id);
    const postViewCount = await getPageViews(`/${params.projectSlug}`);

    return (
      <>
        <div className="my-8 w-full max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold sm:text-center mb-2">
            {post.title}
          </h1>
          <div className="sm:text-center text-gray-600">
            <time dateTime={new Date(post.date).toISOString()}>
              {dateFormatter.format(new Date(post.date))}
            </time>
            <span className="text-gray-400"> / </span>
            <span>{postViewCount || '...'} Views</span>
          </div>
        </div>
        <article className="flex-1 my-6 post-container">
          <NotionRenderer blockMap={blocks} mapImageUrl={toNotionImageUrl} />
        </article>
        <div className="post-container max-w-2xl my-20 text-sm">
          <AuthorFooter />
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-600 my-4 uppercase tracking-wider">
              Continue reading
            </h3>
            <Link href="/blogs" className="font-bold text-blue-600 my-4 ">
              View all →
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {morePosts.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </ul>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return <div>Error loading blog post</div>;
  }
}
