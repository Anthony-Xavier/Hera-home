import React from "react";
import BlogSection from "../../Components/Blog/Blog";
import Seo from "../../Components/Seo/Seo";
const Blog = () => {
  return (
    <>
      <Seo
        title="Blog das madeiras"
        description="Guias da Hera Home para conhecer e escolher madeira: freijó, carvalho, imbuia, ipê, madeira de demolição, ferragens e cuidados de manutenção."
        path="/blog"
      />
      <BlogSection />
    </>
  );
};

export default Blog;
