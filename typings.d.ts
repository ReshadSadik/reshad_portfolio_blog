import { Block } from "typescript";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Blog extends Base {
  author: Author;
  body: any;
  category: Category;
  duration: string;
  motivation: string;
  slug: {
    current: string;
  };
  mainImage: any;
  title: string;
  description: string;
}
