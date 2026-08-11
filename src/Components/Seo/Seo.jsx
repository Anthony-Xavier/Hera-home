import { useEffect } from "react";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../../seo/seoConfig";

const upsertMeta = (seletor, atributos) => {
  let elemento = document.head.querySelector(seletor);
  if (!elemento) {
    elemento = document.createElement("meta");
    Object.entries(atributos).forEach(([nome, valor]) => {
      if (nome !== "content") elemento.setAttribute(nome, valor);
    });
    document.head.appendChild(elemento);
  }
  elemento.setAttribute("content", atributos.content);
};

const upsertLink = (rel, href) => {
  let elemento = document.head.querySelector(`link[rel="${rel}"]`);
  if (!elemento) {
    elemento = document.createElement("link");
    elemento.setAttribute("rel", rel);
    document.head.appendChild(elemento);
  }
  elemento.setAttribute("href", href);
};

// Mantém title/description/canonical/OG/Twitter em sincronia com a rota
// atual. Não usa react-helmet: como o site não tem SSR, robôs sem execução
// de JS (WhatsApp, alguns crawlers) sempre veem apenas o og:image/descrição
// padrão definidos no index.html — só o Google/Bing, que renderizam JS,
// enxergam os valores por página abaixo.
const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
}) => {
  useEffect(() => {
    const tituloCompleto = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = tituloCompleto;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: tituloCompleto });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "pt_BR" });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: tituloCompleto });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
  }, [title, description, path, image, type]);

  return null;
};

export default Seo;
