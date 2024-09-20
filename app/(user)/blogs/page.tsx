import { BiChevronRight } from 'react-icons/bi';
import styles from './page.module.css';
import Image from 'next/image';

import ClientSideRoute from '@/app/components/ClientSideRoute';
import { Post } from '@/types/blog';

import { getBlogTable } from '@/utils/blog';
import { config } from '@/utils/congif';
import { Project } from '@/types/project';
import { Work } from '@/app/components/work';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, devops, and more.',
};

interface AppProps {
  projects: Project[];
}

const BlogPage = async () => {
  const projects = await getBlogTable<Project>(config.notionProjectTableId);

  return (
    <div>
      <Work projects={projects} />

      <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1>
      <ul role="list" className="divide-y divide-gray-300"></ul>
    </div>
  );
};

export default BlogPage;
