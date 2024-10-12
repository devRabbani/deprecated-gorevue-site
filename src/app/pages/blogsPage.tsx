"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { blogs } from "../constants/blogs";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const BlogsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Revue Blog</h1>
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={filteredBlogs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default BlogsPage;
