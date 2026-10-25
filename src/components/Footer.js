
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  ArrowUpRight,
  Database,
  Sparkles,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/a-propos" },
    { label: "Parcours", path: "/parcours" },
    { label: "Compétences", path: "/competences" },
    { label: "Projets", path: "/projets" },
    { label: "Expériences", path: "/experiences" },
    { label: "Certifications", path: "/certifications" },
    { label: "Contact", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Décorations lumineuses */}
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">
        {/* Présentation */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">AH</span>

              <span className="footer-logo-name">
                ABIR <span>HARBAOUI</span>
              </span>
            </Link>

            <div className="footer-role">
              <Sparkles size={15} />
              <span>Data · BI · Intelligence Artificielle</span>
            </div>

            <p className="footer-description">
              Ingénieure Data & Business Intelligence,
              spécialisée en analyse de données, Business
              Intelligence et Big Data. Passionnée par la
              Data Science et l'intelligence artificielle,
              je transforme les données en informations
              utiles et les idées en solutions innovantes.
            </p>

            {/* Réseaux sociaux */}
            <div className="footer-socials">
              <a
                href="https://github.com/AbirHarbaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <span className="social-text">GH</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abir-harbaoui-911192224/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span className="social-text">in</span>
              </a>

              <a
                href="https://www.kaggle.com/abirharbaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Kaggle"
                title="Kaggle"
              >
                <Database size={19} />
              </a>

              <a
                href="mailto:abirharbaoui65@gmail.com"
                className="footer-social-link"
                aria-label="Envoyer un email"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="footer-links"
            aria-label="Navigation de pied de page"
          >
            <h3 className="footer-heading">
              Explorer
              <span className="footer-heading-line" />
            </h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <ArrowUpRight size={14} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-heading">
              Construisons quelque chose
              <span className="footer-heading-line" />
            </h3>

            <p className="footer-contact-intro">
              Vous avez une opportunité professionnelle,
              un projet Data ou une idée autour de l'IA ?
              Je serais ravie d'échanger avec vous.
            </p>

            <a
              href="mailto:abirharbaoui65@gmail.com"
              className="footer-email"
            >
              <span className="footer-email-icon">
                <Mail size={18} />
              </span>

              <span className="footer-email-text">
                <small>Écrivez-moi</small>
                <strong>
                  abirharbaoui65@gmail.com
                </strong>
              </span>

              <ArrowUpRight
                size={18}
                className="footer-email-arrow"
              />
            </a>

            <div className="footer-location">
              <MapPin size={17} />
              <span>Tunis, Tunisie</span>
              <span className="footer-location-dot" />
            </div>

            <Link
              to="/contact"
              className="footer-contact-button"
            >
              Discutons de votre projet
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer-divider">
          <span />
          <Database size={15} />
          <span />
        </div>

        {/* Bas de page */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear}{" "}
            <strong>Abir Harbaoui</strong>.
            Tous droits réservés.
          </p>

          <p className="footer-made">
            Créé avec <Heart size={14} /> et passion
            <span className="footer-made-sparkle">✦</span>
          </p>

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Retour en haut de la page"
            title="Retour en haut"
          >
            <ArrowUp size={19} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
