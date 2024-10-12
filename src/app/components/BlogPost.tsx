import React from "react";
import { Blog } from "../constants/blogs";
import Image from "next/image";

interface BlogPostProps {
  blog: Blog;
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center mb-4">
        <p className="text-gray-600 mr-4">{blog.author}</p>
        <p className="text-gray-600 mr-4">{blog.date}</p>
        <p className="text-gray-600">{blog.readTime} read</p>
      </div>
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={800}
        height={400}
        className="mb-8 rounded-lg"
      />
      <div className="prose max-w-none">
        {blog.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Tags</h2>
        <div className="flex flex-wrap">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
