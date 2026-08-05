import React, { useMemo, useRef, useState } from "react";
import "./Loja.scss";

const IconeImagem = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

const IconeWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.42a9.87 9.87 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.19 8.19 0 0 1-1.26-4.4c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.81c0 4.53-3.69 8.24-8.24 8.24Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.19 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

const categorias = [
  { id: "mesas-laterais", label: "Mesas laterais" },
  { id: "bancos", label: "Bancos" },
  { id: "criados-mudos", label: "Criados-mudos" },
  { id: "mesas-centro", label: "Mesas de centro" },
  { id: "prateleiras", label: "Prateleiras" },
  { id: "espelhos", label: "Espelhos" },
  { id: "pecas-decoracao", label: "Peças de decoração" },
  { id: "disponiveis-showroom", label: "Disponíveis no showroom" },
];

const produtos = [
  { id: 1, categoria: "mesas-laterais", nome: "Mesa lateral Circe", material: "Freijó" },
  { id: 2, categoria: "mesas-laterais", nome: "Mesa lateral Atlas", material: "Carvalho" },
  { id: 3, categoria: "mesas-laterais", nome: "Mesa lateral Delfos", material: "Imbuia" },
  { id: 4, categoria: "bancos", nome: "Banco Rústico", material: "Freijó" },
  { id: 5, categoria: "bancos", nome: "Banco Baixo Nima", material: "Carvalho" },
  { id: 6, categoria: "criados-mudos", nome: "Criado-mudo Nix", material: "Imbuia" },
  { id: 7, categoria: "criados-mudos", nome: "Criado-mudo Vega", material: "Freijó" },
  { id: 8, categoria: "mesas-centro", nome: "Mesa de centro Órion", material: "Carvalho" },
  { id: 9, categoria: "mesas-centro", nome: "Mesa de centro Luna", material: "Imbuia" },
  { id: 10, categoria: "prateleiras", nome: "Prateleira Aria", material: "Freijó" },
  { id: 11, categoria: "prateleiras", nome: "Prateleira Nima", material: "Carvalho" },
  { id: 12, categoria: "espelhos", nome: "Espelho Selene", material: "Imbuia" },
  { id: 13, categoria: "espelhos", nome: "Espelho Íris", material: "Freijó" },
  { id: 14, categoria: "pecas-decoracao", nome: "Vaso decorativo Terra", material: "Carvalho" },
  { id: 15, categoria: "pecas-decoracao", nome: "Bandeja Cedro", material: "Imbuia" },
  { id: 16, categoria: "disponiveis-showroom", nome: "Mesa lateral Delfos", material: "Imbuia" },
  { id: 17, categoria: "disponiveis-showroom", nome: "Banco Rústico", material: "Freijó" },
];

const LinhaProdutos = ({ produtos }) => {
  const gridRef = useRef(null);
  const arrastoRef = useRef({ ativo: false, inicioX: 0, scrollInicial: 0, moveu: false });

  const handlePointerDown = (e) => {
    const grid = gridRef.current;
    if (!grid) return;

    arrastoRef.current = {
      ativo: true,
      inicioX: e.pageX,
      scrollInicial: grid.scrollLeft,
      moveu: false,
    };
    grid.setPointerCapture(e.pointerId);
    grid.classList.add("loja__grid--arrastando");
  };

  const handlePointerMove = (e) => {
    const grid = gridRef.current;
    const arrasto = arrastoRef.current;
    if (!grid || !arrasto.ativo) return;

    const delta = e.pageX - arrasto.inicioX;
    if (Math.abs(delta) > 5) arrasto.moveu = true;
    grid.scrollLeft = arrasto.scrollInicial - delta;
  };

  const handlePointerUp = (e) => {
    const grid = gridRef.current;
    arrastoRef.current.ativo = false;
    grid?.classList.remove("loja__grid--arrastando");
    try {
      grid?.releasePointerCapture(e.pointerId);
    } catch {
      // ponteiro já liberado
    }
  };

  const handleClickCapture = (e) => {
    if (arrastoRef.current.moveu) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className="loja__grid"
      ref={gridRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClickCapture={handleClickCapture}
    >
      {produtos.map((produto) => (
        <div className="loja__card" key={produto.id}>
          <div className="loja__card-imagem">
            <IconeImagem />
          </div>
          <h4 className="loja__card-titulo">{produto.nome}</h4>
          <span className="loja__card-material">{produto.material}</span>
          <button type="button" className="loja__card-botao">
            ESPIAR
          </button>
        </div>
      ))}
    </div>
  );
};

const Loja = () => {
  const [categoriasAtivas, setCategoriasAtivas] = useState([]);

  const contagemPorCategoria = useMemo(() => {
    return categorias.reduce((acc, categoria) => {
      acc[categoria.id] = produtos.filter((produto) => produto.categoria === categoria.id).length;
      return acc;
    }, {});
  }, []);

  const categoriasVisiveis =
    categoriasAtivas.length === 0
      ? categorias
      : categorias.filter((categoria) => categoriasAtivas.includes(categoria.id));

  const alternarCategoria = (id) => {
    setCategoriasAtivas((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    );
  };

  return (
    <section className="loja">
      <div className="loja__header">
        <h3 className="loja__eyebrow">PRONTA ENTREGA</h3>
        <h2 className="loja__titulo">Peças disponíveis no showroom</h2>
        <p className="loja__subtitulo">
          Móveis finalizados, prontos para entrega imediata. Disponibilidade
          limitada — consulte pelo WhatsApp.
        </p>
      </div>

      <div className="loja__corpo">
        <aside className="loja__sidebar">
          <h4 className="loja__sidebar-titulo">CATEGORIA</h4>
          <ul className="loja__categoria-lista">
            {categorias.map((categoria) => (
              <li className="loja__categoria-item" key={categoria.id}>
                <label className="loja__categoria-label">
                  <input
                    type="checkbox"
                    className="loja__categoria-checkbox"
                    checked={categoriasAtivas.includes(categoria.id)}
                    onChange={() => alternarCategoria(categoria.id)}
                  />
                  {categoria.label}
                </label>
                <span className="loja__categoria-contagem">
                  {contagemPorCategoria[categoria.id]}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="loja__conteudo">
          {categoriasVisiveis.map((categoria) => {
            const produtosDaCategoria = produtos.filter(
              (produto) => produto.categoria === categoria.id
            );
            if (produtosDaCategoria.length === 0) return null;

            return (
              <div className="loja__secao" key={categoria.id}>
                <div className="loja__secao-cabecalho">
                  <h2 className="loja__secao-titulo">{categoria.label}</h2>
                  <span className="loja__secao-contagem">
                    {produtosDaCategoria.length} PEÇAS NO SHOWROOM
                  </span>
                </div>

                <LinhaProdutos produtos={produtosDaCategoria} />
              </div>
            );
          })}
        </div>
      </div>

      <a
        className="loja__whatsapp"
        href="https://wa.me/555198144446"
        target="_blank"
        rel="noreferrer"
      >
        <IconeWhatsApp />
        Fale no WhatsApp
      </a>
    </section>
  );
};

export default Loja;
