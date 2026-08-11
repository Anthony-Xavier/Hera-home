import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";

const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Portifólio", path: "/portifolio" },
    { label: "Loja", path: "/loja" },
    { label: "Sob medida", path: "/sobMedida" },
    { label: "Blog", path: "/blog" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/Contato" },
]
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <p className="header__titulo">Hera Home</p>

      <button
        className={`header__toggle ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
        {navLinks.map(({label,path}) => (
            <NavLink key={path} to={path} onClick={() => setIsOpen(false)}>
                {label}
            </NavLink>
        ))}
      </nav>

      {isOpen && (
        <div className="header__overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </header>
  )
}

export default NavBar
