
import { useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Search,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import "./Navbar.css";

const searchData = [
  {
    title: "À propos — Abir Harbaoui",
    description: "Ingénieure informatique spécialisée en Data, BI et Big Data.",
    keywords: "about profil présentation informatique data analyst",
    path: "/a-propos",
  },
  {
    title: "Parcours et formation",
    description: "Cycle ingénieur BI & Big Data, Master et Licence.",
    keywords: "formation études université diplôme parcours education",
    path: "/parcours",
  },
  {
    title: "Compétences techniques",
    description: "Python, SQL, Java, React, Flask, Power BI, Talend, Spark.",
    keywords: "python sql java react flask power bi talend spark hadoop kafka",
    path: "/competences",
  },
  {
    title: "Projets Data et Intelligence Artificielle",
    description: "StudyAgent, CVSmart AI, chatbot IA, Machine Learning et BI.",
    keywords: "projets project ia ai machine learning deep learning chatbot studyagent cvsmart",
    path: "/projets",
  },
  {
    title: "Expériences professionnelles",
    description: "Shell, Syrine School, CodeAlpha, Sierra Bravo, Attijari Bank.",
    keywords: "expérience experience stage shell data scientist data analyst développeuse",
    path: "/experiences",
  },
  {
    title: "Certifications",
    description: "Azure Fundamentals, Azure AI Fundamentals, Power BI et CCNA.",
    keywords: "certification azure az-900 ai-900 power bi ccna microsoft",
    path: "/certifications",
  },
  {
    title: "Contact",
    description: "Contacter Abir pour une opportunité professionnelle.",
    keywords: "email linkedin github contact recrutement emploi",
    path: "/contact",
  },
];

const navLinks = [
  { label: "home", path: "/" },
  { label: "about", path: "/a-propos" },
  { label: "journey", path: "/parcours" },
  { label: "skills", path: "/competences" },
  { label: "projects", path: "/projets" },
  { label: "experience", path: "/experiences" },
  { label: "certifications", path: "/certifications" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { language, changeLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!normalizedQuery) return [];

    return searchData.filter((item) =>
      `${item.title} ${item.description} ${item.keywords}`
        .toLocaleLowerCase()
        .includes(normalizedQuery)
    );
  }, [query]);

  const openResult = (path) => {
    navigate(path);
    setQuery("");
    setSearchOpen(false);
    closeMenu();
  };

  const toggleLanguage = () => {
    changeLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <span className="brand-logo">AH</span>
        <span className="brand-name">
          ABIR<span className="brand-dot">.</span>
        </span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav
        id="main-navigation"
        className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            {t(link.label)}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `navbar-contact ${isActive ? "navbar-link-active" : ""}`
          }
          onClick={closeMenu}
        >
          {t("contact")} <ArrowUpRight size={16} />
        </NavLink>

        <div className="navbar-tools">
          <button
            className={`navbar-tool ${searchOpen ? "tool-active" : ""}`}
            onClick={() => {
              setSearchOpen(!searchOpen);
              setQuery("");
            }}
            aria-label={t("search")}
            aria-expanded={searchOpen}
          >
            <Search size={18} />
            <span>{t("search")}</span>
          </button>

          <button
            className="navbar-language"
            onClick={toggleLanguage}
            aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
            title={t("language")}
          >
            <Globe size={17} />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-panel">
          <div className="search-panel-heading">
            <div>
              <span className="search-eyebrow">AH / SEARCH</span>
              <h3>{t("search")}</h3>
            </div>

            <button
              className="search-close"
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              aria-label="Fermer la recherche"
            >
              <X size={20} />
            </button>
          </div>

          <div className="search-input-wrap">
            <Search size={19} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("searchPlaceholder")}
              autoFocus
            />
            <span className="search-shortcut">⌕</span>
          </div>

          <div className="search-results">
            {!query.trim() ? (
              <p className="search-message">{t("searchHint")}</p>
            ) : results.length === 0 ? (
              <p className="search-message">{t("noResults")}</p>
            ) : (
              results.map((item) => (
                <button
                  key={item.path}
                  className="search-result"
                  onClick={() => openResult(item.path)}
                >
                  <span className="search-result-icon">
                    <ArrowRight size={17} />
                  </span>
                  <span className="search-result-copy">
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <ArrowUpRight className="search-result-arrow" size={17} />
                </button>
              ))
            )}
          </div>

          <div className="search-footer">
            <span>PORTFOLIO · ABIR HARBAOUI</span>
            <span>{results.length} résultat(s)</span>
          </div>
        </div>
      )}
    </header>
  );
}
