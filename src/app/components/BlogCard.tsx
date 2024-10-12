import React from "react";
import { motion } from "framer-motion";
import { Blog } from "../constants/blogs";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{blog.category}</p>
        <p className="text-gray-700 mb-4">{blog.excerpt}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{blog.author}</p>
          <p className="text-gray-500 text-sm">{blog.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
