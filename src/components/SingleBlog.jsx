import React from "react";

import SingleBlogHeader from "./Blog/SingleBlogHeader";
import BlogContent from "./Blog/BlogContent";
import RealatedBlogs from "./Blog/RealatedBlogs";

export default function SingleBlog() {
  return (
    <>
      <SingleBlogHeader />
      <BlogContent />
      <RealatedBlogs />
    </>
  );
}
