import React from "react";
import { blogs } from "../../constants/blogs";
import BlogPost from "../../components/BlogPost";
import { notFound } from "next/navigation";

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  return <BlogPost blog={blog} />;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}
