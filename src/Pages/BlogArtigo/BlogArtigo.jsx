import React from "react";
import BlogArtigoSection from "../../Components/BlogArtigo/BlogArtigo";
import Seo from "../../Components/Seo/Seo";

const BlogArtigo = () => {
  return (
    <>
      <Seo
        title="Como escolher a madeira certa para o seu móvel sob medida"
        description="Guia completo da Hera Home sobre freijó, carvalho, imbuia, ipê e madeira de demolição: características, usos e como decidir a madeira do seu móvel."
        path="/blog/como-escolher-madeira"
        type="article"
      />
      <BlogArtigoSection />
    </>
  );
};

export default BlogArtigo;
