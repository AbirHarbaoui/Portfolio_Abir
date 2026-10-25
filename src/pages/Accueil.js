
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  BarChart3,
  Download,
  RotateCw,
  Layers,
  Scan,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  ExternalLink,
  Globe,
  Users,
  Languages,
  Award,
  Activity,
  Cpu,
  DatabaseZap,
  Network,
  Terminal,
} from "lucide-react";
import "./Accueil.css";
import { FaGithub } from "react-icons/fa";

/* ==================================================
   CONFIGURATION DES IMAGES
   Place les images locales dans public/images/.
================================================== */

const imagePaths = {
  shell: "/images/entreprises/shell.png",
  syrine: "/images/entreprises/syrine-school.png",
  codealpha: "/images/entreprises/codealpha.png",
  iteam: "/images/facultes/iteam-university.png",
  fsb: "/images/facultes/fsb-bizerte.png",
};

/* ==================================================
   TECHNOLOGIES : LOGOS ET COULEURS INDIVIDUELLES
================================================== */

const technologies = [
  {
    name: "Python",
    category: "IA & Data",
    logo: "https://cdn.simpleicons.org/python/3776AB",
    color: "#3776AB",
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    logo: "https://cdn.simpleicons.org/powerbi/F2C811",
    color: "#F2C811",
  },
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    color: "#61DAFB",
  },
  {
    name: "SQL",
    category: "Bases de données",
    logo: "https://cdn.simpleicons.org/mysql/4479A1",
    color: "#4479A1",
  },
  {
    name: "Flask",
    category: "Backend",
    logo: "https://cdn.simpleicons.org/flask/FFFFFF",
    color: "#A8A8B8",
  },
  {
    name: "Java",
    category: "Développement",
    logo: "https://cdn.simpleicons.org/openjdk/ED8B00",
    color: "#ED8B00",
  },
  {
    name: "Pandas",
    category: "Data Science",
    logo: "https://cdn.simpleicons.org/pandas/150458",
    color: "#9C8CFF",
  },
  {
    name: "Scikit-learn",
    category: "Machine Learning",
    logo: "https://cdn.simpleicons.org/scikitlearn/F7931E",
    color: "#F7931E",
  },
  {
    name: "TensorFlow",
    category: "Deep Learning",
    logo: "https://cdn.simpleicons.org/tensorflow/FF6F00",
    color: "#FF6F00",
  },
  {
    name: "OpenCV",
    category: "Computer Vision",
    logo: "https://cdn.simpleicons.org/opencv/5C3EE8",
    color: "#5C3EE8",
  },
  {
    name: "MongoDB",
    category: "Bases de données",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    category: "Bases de données",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    color: "#4169E1",
  },
  {
    name: "Git",
    category: "Outils",
    logo: "https://cdn.simpleicons.org/git/F05032",
    color: "#F05032",
  },
  {
    name: "Apache Spark",
    category: "Big Data",
    logo: "https://cdn.simpleicons.org/apachespark/E25A1C",
    color: "#E25A1C",
  },
  {
    name: "Hadoop",
    category: "Big Data",
    logo: "https://cdn.simpleicons.org/apachehadoop/66CCFF",
    color: "#66CCFF",
  },
  {
    name: "Docker",
    category: "Déploiement",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
    color: "#2496ED",
  },
];

/* ==================================================
   DONNÉES DU PORTFOLIO
================================================== */

const specialties = [
  {
    icon: BarChart3,
    number: "01",
    label: "Data & Business Intelligence",
    description:
      "Transformer les données en tableaux de bord, indicateurs et informations utiles à la décision.",
    color: "#E9BB52",
    className: "specialty-gold",
  },
  {
    icon: BrainCircuit,
    number: "02",
    label: "Intelligence artificielle",
    description:
      "Explorer le Machine Learning, les LLM et la vision par ordinateur à travers des projets concrets.",
    color: "#B59AFF",
    className: "specialty-purple",
  },
  {
    icon: Database,
    number: "03",
    label: "Big Data & Data Engineering",
    description:
      "Structurer, transformer et exploiter les données grâce aux outils de traitement et d'intégration.",
    color: "#75D9D0",
    className: "specialty-teal",
  },
  {
    icon: Code2,
    number: "04",
    label: "Développement informatique",
    description:
      "Concevoir des applications web et des API reliant données, interfaces et services intelligents.",
    color: "#F39BD5",
    className: "specialty-pink",
  },
];

const logoStyles = ["Cristal", "Glace", "Holo", "Obsidienne", "Chrome"];

const portfolioProjects = [
  {
    number: "01",
    category: "IA · Éducation",
    title: "StudyAgent",
    description:
      "Assistant pédagogique exploitant des documents PDF pour générer des résumés, des quiz et des réponses contextualisées.",
    tags: ["Python", "Flask", "SQLite", "LLM"],
    icon: BrainCircuit,
    color: "#C5A4FF",
    url: "https://github.com/AbirHarbaoui",
  },
  {
    number: "02",
    category: "IA · Automatisation",
    title: "SmartMail-AI",
    description:
      "Concept d'assistant intelligent destiné à classifier et prioriser les e-mails et à faciliter la préparation des réponses.",
    tags: ["Python", "Ollama", "Qwen"],
    icon: Mail,
    color: "#82D9D0",
    url: "https://github.com/AbirHarbaoui",
  },
  {
    number: "03",
    category: "Computer Vision",
    title: "Vehicle Counter",
    description:
      "Détection et comptage de véhicules dans des vidéos à l'aide de modèles de vision par ordinateur.",
    tags: ["Python", "YOLO", "OpenCV"],
    icon: Scan,
    color: "#F4A9D5",
    url: "https://github.com/AbirHarbaoui",
  },
];

const portfolioExperiences = [
  {
    period: "06/2026 — 09/2026",
    role: "Ingénieure informatique",
    company: "Shell Sedjoumi",
    image: imagePaths.shell,
    description:
      "Développement d'une application de gestion des opérations d'une station-service : ventes de carburant, stocks, caisse, crédits clients et suivi des employés.",
    tags: ["React", "Java / JEE", "Python", "SQL"],
    color: "#F5BE48",
  },
  {
    period: "09/2025 — 05/2026",
    role: "Assistante administrative & Data Analyst",
    company: "Syrine School",
    image: imagePaths.syrine,
    description:
      "Organisation des données scolaires et création de suivis pour la facturation, les paiements et les indicateurs financiers.",
    tags: ["Excel", "Power Query", "Power BI"],
    color: "#A995F7",
  },
  {
    period: "07/2025 — 08/2025",
    role: "Stagiaire Data Science",
    company: "CodeAlpha",
    image: imagePaths.codealpha,
    description:
      "Réalisation de projets de classification, d'analyse de données, de prédiction de prix et de prévision des ventes.",
    tags: ["Python", "Pandas", "Scikit-learn", "Flask"],
    color: "#76D8CE",
  },
];

const skillGroups = [
  {
    title: "Data & Business Intelligence",
    subtitle: "Décision & visualisation",
    icon: BarChart3,
    color: "#E8BB58",
    skills: ["Power BI", "SQL", "Talend", "Excel", "Power Query"],
  },
  {
    title: "Data Science & IA",
    subtitle: "Analyse & modèles",
    icon: BrainCircuit,
    color: "#B89BFF",
    skills: ["Python", "Pandas", "Scikit-learn", "YOLO", "Ollama"],
  },
  {
    title: "Big Data & Data Engineering",
    subtitle: "Traitement & pipelines",
    icon: DatabaseZap,
    color: "#77D8D0",
    skills: ["Apache Spark", "Hadoop", "Kafka", "PySpark", "Databricks"],
  },
  {
    title: "Développement",
    subtitle: "Applications & API",
    icon: Terminal,
    color: "#F2A4D5",
    skills: ["React", "Flask", "Django", "Java", "REST API", "Git"],
  },
];

const portfolioEducation = [
  {
    period: "2023 — 2025",
    title: "Cycle d'ingénieure en informatique",
    school: "iTeam University",
    image: imagePaths.iteam,
    description:
      "Spécialité BI & Big Data · 17,5/20 · Mention Très Bien · Félicitations du jury · Majeure de promotion 2025.",
    color: "#F0A4D3",
  },
  {
    period: "2022 — 2023",
    title: "Master de recherche en informatique",
    school: "Faculté des Sciences de Bizerte",
    image: imagePaths.fsb,
    description: "Mention Assez Bien · 2e place de promotion.",
    color: "#B7A0FF",
  },
  {
    period: "2019 — 2022",
    title: "Licence en génie logiciel et systèmes d'information",
    school: "Faculté des Sciences de Bizerte",
    image: imagePaths.fsb,
    description:
      "Formation en développement logiciel, systèmes d'information et bases de données.",
    color: "#76D8CE",
  },
];

const portfolioLanguages = [
  { name: "Arabe", subtitle: "العربية", symbol: "ع" },
  { name: "Français", subtitle: "Communication en français", symbol: "FR" },
  { name: "Anglais", subtitle: "English", symbol: "EN" },
];

const portfolioOrganizations = [
  {
    period: "2023 — 2024",
    name: "Club de Robotique",
    description:
      "Participation à la vie d'un club universitaire autour de la robotique et des technologies.",
    icon: Cpu,
  },
  {
    period: "2021 — 2022",
    name: "Club AOC-Bizerte",
    description: "Participation aux activités du club universitaire.",
    icon: Users,
  },
  {
    period: "2021 — 2022",
    name: "Club Tunivisions-Bizerte",
    description: "Participation aux activités du club universitaire.",
    icon: Award,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    short: "in",
    url: "https://www.linkedin.com/in/abir-harbaoui-911192224/",
  },
  {
    label: "GitHub",
    short: "GH",
    url: "https://github.com/AbirHarbaoui",
  },
  {
    label: "Kaggle",
    short: "K",
    url: "https://www.kaggle.com/abirharbaoui",
  },
];

/* ==================================================
   COMPOSANTS RÉUTILISABLES
================================================== */

function SectionHeading({ eyebrow, title, accent, description, number }) {
  return (
    <motion.div
      className="portfolio-section-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {number && <span className="section-index">{number}</span>}

      <span className="portfolio-eyebrow">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2>
        {title} <span>{accent}</span>
      </h2>

      <p>{description}</p>
    </motion.div>
  );
}

function TechnologyLogo({ technology }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`technology-logo ${imageFailed ? "technology-logo-fallback" : ""}`}
      style={{ "--tech-color": technology.color }}
      title={technology.name}
    >
      {!imageFailed ? (
        <img
          src={technology.logo}
          alt={technology.name}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <Code2 size={29} aria-hidden="true" />
      )}
    </div>
  );
}

function CompanyLogo({ src, name }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="company-logo">
      {!imageFailed ? (
        <img
          src={src}
          alt={`Logo ${name}`}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span>{name.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
}

/* ==================================================
   PAGE ACCUEIL
================================================== */

export default function Accueil() {
  const [logoStyle, setLogoStyle] = useState("Holo");
  const [rotation, setRotation] = useState(true);
  const [exploded, setExploded] = useState(false);
  const [planView, setPlanView] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleMouseLeave = () => setPointer({ x: 0, y: 0 });

  return (
    <main className="portfolio-home">

      {/* 01 — ACCUEIL / HERO */}

      <section
        className="home-section"
        id="accueil"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          "--pointer-x": `${pointer.x * 13}px`,
          "--pointer-y": `${pointer.y * 13}px`,
          "--pointer-glow-x": `${50 + pointer.x * 12}%`,
          "--pointer-glow-y": `${45 + pointer.y * 12}%`,
        }}
      >
        <div className="home-background" aria-hidden="true">
          <div className="home-ambient home-ambient-one" />
          <div className="home-ambient home-ambient-two" />
          <div className="home-stars" />
          <div className="home-grid" />

          <svg
            className="home-network"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <g className="network-lines">
              <path d="M0 160 L170 80 L310 220 L470 110 L620 250 L780 130 L960 240 L1200 80" />
              <path d="M0 390 L190 280 L340 420 L500 310 L670 460 L830 330 L1010 440 L1200 340" />
              <path d="M50 650 L220 510 L400 690 L590 530 L760 680 L930 520 L1150 700" />
              <path d="M170 80 L190 280 L170 510 L220 510" />
              <path d="M470 110 L500 310 L590 530" />
              <path d="M780 130 L830 330 L760 680" />
              <path d="M960 240 L1010 440 L930 520" />
            </g>
            <g className="network-points">
              <circle cx="170" cy="80" r="3" />
              <circle cx="310" cy="220" r="3" />
              <circle cx="470" cy="110" r="3" />
              <circle cx="620" cy="250" r="3" />
              <circle cx="780" cy="130" r="3" />
              <circle cx="960" cy="240" r="3" />
              <circle cx="340" cy="420" r="3" />
              <circle cx="670" cy="460" r="3" />
              <circle cx="1010" cy="440" r="3" />
              <circle cx="400" cy="690" r="3" />
              <circle cx="760" cy="680" r="3" />
            </g>
          </svg>
        </div>

        <div className="home-container">
          <div className="home-content">
            <motion.div
              className="home-availability"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="availability-dot" />
              DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS
            </motion.div>

            <motion.p
              className="home-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Sparkles size={17} />
              BIENVENUE DANS MON UNIVERS
            </motion.p>

            <motion.h1
              className="home-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              <span>Abir</span>
              <span className="home-title-second">
                Harbaoui<span className="home-title-dot">.</span>
              </span>
            </motion.h1>

            <motion.div
              className="home-title-underline"
              initial={{ width: 0 }}
              animate={{ width: 92 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />

            <motion.h2
              className="home-subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Ingénieure Data & Business Intelligence
              <span className="home-subtitle-extra">
                Data Analyst <span>|</span> Data Scientist
              </span>
            </motion.h2>

            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Passionnée par la donnée, la Business Intelligence et
              l'intelligence artificielle, je conçois des solutions
              data-driven pour transformer les données en insights et
              créer de la valeur à travers des projets innovants.
            </motion.p>

            <motion.div
              className="home-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <Link to="/projets" className="home-button home-button-primary">
                <ArrowRight size={20} />
                Voir mes projets
              </Link>

              <a
                href="/CV_Abir_Harbaoui.pdf"
                download
                className="home-button home-button-secondary"
              >
                <Download size={19} />
                Télécharger le CV
              </a>
            </motion.div>

            <div className="home-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-link"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.label === "GitHub" ? (
                    <FaGithub size={19} />
                  ) : (
                    <span>{social.short}</span>
                  )}
                  <ArrowUpRight size={12} />
                </a>
              ))}

              <a
                href="mailto:abirharbaoui65@gmail.com"
                className="home-social-link"
                aria-label="Email"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>

            <div className="home-location">
              <MapPin size={15} />
              <span>Tunis, Tunisie</span>
            </div>

            <div className="hero-quick-stats">
              <div>
                <span className="hero-stat-number">17,5/20</span>
                <span className="hero-stat-label">Cycle ingénieur</span>
              </div>
              <span className="hero-stat-divider" />
              <div>
                <span className="hero-stat-number">Data + IA</span>
                <span className="hero-stat-label">Mes domaines</span>
              </div>
            </div>
          </div>

          {/* LOGO AH INTERACTIF */}

          <motion.div
            className={`home-visual ${rotation ? "logo-rotating" : ""} ${
              exploded ? "logo-exploded" : ""
            } ${planView ? "logo-plan-view" : ""}`}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="home-visual-glow" />

            <div className="logo-heading">
              <span className="logo-heading-line" />
              <span>MY DIGITAL IDENTITY</span>
              <span className="logo-heading-line" />
            </div>

            <div className={`ah-logo-scene style-${logoStyle.toLowerCase()}`}>
              <div className="logo-orbit logo-orbit-one" />
              <div className="logo-orbit logo-orbit-two" />
              <div className="logo-orbit logo-orbit-three" />

              <div className="logo-crosshair logo-crosshair-horizontal" />
              <div className="logo-crosshair logo-crosshair-vertical" />

              <div className="ah-logo" aria-label="Logo AH">
                <span className="ah-letter ah-letter-a">A</span>
                <span className="ah-letter ah-letter-h">H</span>
              </div>

              <div className="logo-particles">
                {Array.from({ length: 32 }, (_, index) => (
                  <span
                    key={index}
                    style={{
                      "--i": index,
                      "--particle-angle": `${index * 11.25}deg`,
                    }}
                  />
                ))}
              </div>

              <div className="logo-side-label logo-side-label-top">
                <span>DATA</span>
                <span>BUSINESS INTELLIGENCE</span>
                <span>ARTIFICIAL INTELLIGENCE</span>
              </div>

              <div className="logo-side-label logo-side-label-bottom">
                <span>ANALYSER</span>
                <span>MODÉLISER</span>
                <span>INNOVER</span>
              </div>
            </div>

            <div className="logo-instruction">
              <span />
              GLISSEZ LA SOURIS POUR EXPLORER
              <span />
            </div>

            <div className="logo-controls">
              <div className="logo-style-options">
                {logoStyles.map((style) => (
                  <button
                    key={style}
                    type="button"
                    className={`logo-style-button ${
                      logoStyle === style ? "selected" : ""
                    }`}
                    onClick={() => setLogoStyle(style)}
                    aria-pressed={logoStyle === style}
                  >
                    <span className={`style-orb orb-${style.toLowerCase()}`} />
                    {style}
                  </button>
                ))}
              </div>

              <div className="logo-control-divider" />

              <div className="logo-action-options">
                <button
                  type="button"
                  className={`logo-action-button ${exploded ? "selected" : ""}`}
                  onClick={() => setExploded(!exploded)}
                  aria-pressed={exploded}
                >
                  <Layers size={16} />
                  Éclaté
                </button>

                <button
                  type="button"
                  className={`logo-action-button ${planView ? "selected" : ""}`}
                  onClick={() => setPlanView(!planView)}
                  aria-pressed={planView}
                >
                  <Scan size={16} />
                  Plan
                </button>

                <button
                  type="button"
                  className={`logo-action-button ${rotation ? "selected" : ""}`}
                  onClick={() => setRotation(!rotation)}
                  aria-pressed={rotation}
                >
                  <RotateCw size={16} />
                  {rotation ? "Rotation ON" : "Rotation OFF"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="home-bottom">
          <span className="home-bottom-line" />
          <span>DATA · TECHNOLOGY · INNOVATION</span>
          <span className="home-bottom-line" />
        </div>
      </section>

      {/* 02 — SPÉCIALITÉS : COULEURS DIFFÉRENCIÉES */}

      <section className="portfolio-section specialties-section" id="specialites">
        <SectionHeading
          number="01"
          eyebrow="MON UNIVERS"
          title="À la croisée de"
          accent="la Data & l'IA"
          description="Quatre domaines complémentaires, quatre façons de transformer une idée en solution."
        />

        <div className="portfolio-specialties specialties-editorial">
          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`portfolio-specialty-card ${item.className}`}
                key={item.label}
                style={{ "--specialty-color": item.color }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="portfolio-card-number">{item.number}</span>
                <div className="portfolio-card-icon">
                  <Icon size={29} />
                </div>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <span className="specialty-bottom-line" />
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* 03 — PROJETS : ACCENTS VISUELS PAR PROJET */}

      <section className="portfolio-section projects-section" id="projets">
        <SectionHeading
          number="02"
          eyebrow="MES RÉALISATIONS"
          title="Des idées qui deviennent"
          accent="des projets."
          description="Une sélection de réalisations illustrant mon intérêt pour l'intelligence artificielle, la programmation et la data."
        />

        <div className="portfolio-projects-grid projects-editorial">
          {portfolioProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="portfolio-project-card"
                key={project.number}
                style={{ "--project-color": project.color }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="project-visual">
                  <span className="project-visual-number">{project.number}</span>
                  <div className="project-visual-orbit" />
                  <div className="project-visual-icon">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <span className="project-visual-caption">
                    {project.category}
                  </span>
                </div>

                <div className="project-card-body">
                  <span className="portfolio-project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-project-link"
                  >
                    Explorer sur GitHub
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="portfolio-centered-action">
          <Link to="/projets" className="portfolio-action-button">
            Voir tous mes projets
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 04 — EXPÉRIENCES : FRISE CHRONOLOGIQUE */}

      <section className="portfolio-section experience-section" id="experiences">
        <SectionHeading
          number="03"
          eyebrow="MON PARCOURS PROFESSIONNEL"
          title="L'expérience au service"
          accent="de la donnée."
          description="Mes expériences en développement, analyse de données et Data Science."
        />

        <div className="experience-timeline">
          {portfolioExperiences.map((experience, index) => (
            <motion.article
              className={`experience-row ${index % 2 ? "experience-row-reverse" : ""}`}
              key={`${experience.company}-${experience.role}`}
              style={{ "--experience-color": experience.color }}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="experience-date">
                <span>{experience.period}</span>
                <span className="experience-date-line" />
              </div>

              <div className="experience-node">
                <span />
              </div>

              <div className="experience-panel">
                <div className="experience-company-header">
                  <CompanyLogo
                    src={experience.image}
                    name={experience.company}
                  />
                  <div>
                    <span className="experience-company-name">
                      {experience.company}
                    </span>
                    <h3>{experience.role}</h3>
                  </div>
                  <BriefcaseBusiness className="experience-panel-icon" size={23} />
                </div>

                <p>{experience.description}</p>

                <div className="portfolio-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="portfolio-centered-action">
          <Link to="/experiences" className="portfolio-action-button">
            Voir toutes mes expériences
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 05 — COMPÉTENCES : LOGOS ET GRILLE ASYMÉTRIQUE */}

      <section className="portfolio-section skills-section" id="competences">
        <SectionHeading
          number="04"
          eyebrow="MA BOÎTE À OUTILS"
          title="Les technologies"
          accent="que j'explore."
          description="Un aperçu visuel de mon environnement technique en Data, IA, développement et Business Intelligence."
        />

        <div className="skills-featured-layout">
          <div className="skills-intro-panel">
            <span className="skills-panel-label">
              <Activity size={15} />
              TECHNOLOGIES & OUTILS
            </span>

            <h3>
              Des outils variés.
              <br />
              <span>Un même objectif :</span>
              <br />
              créer de la valeur.
            </h3>

            <p>
              De la préparation des données à la conception d'applications,
              je mobilise les technologies adaptées aux besoins de chaque projet.
            </p>

            <Link to="/competences" className="skills-discover-link">
              Toutes mes compétences
              <ArrowUpRight size={18} />
            </Link>

            <div className="skills-intro-decoration">
              <Network size={95} strokeWidth={0.7} />
            </div>
          </div>

          <div className="technology-cloud">
            {technologies.map((technology, index) => (
              <motion.div
                className="technology-item"
                key={technology.name}
                style={{ "--tech-color": technology.color }}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.035, duration: 0.35 }}
                title={`${technology.name} · ${technology.category}`}
              >
                <TechnologyLogo technology={technology} />
                <span className="technology-name">{technology.name}</span>
                <span className="technology-category">
                  {technology.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="skills-groups-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className={`skill-group skill-group-${index + 1}`}
                key={group.title}
                style={{ "--skill-color": group.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="skill-group-top">
                  <div className="skill-group-icon">
                    <Icon size={24} />
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>

                <div className="skill-group-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="skills-note">
          Les logos illustrent les technologies associées à mes projets et à
          mon parcours. Leur affichage nécessite une connexion Internet.
        </p>
      </section>

      {/* 06 — FORMATION : LOGOS DES ÉTABLISSEMENTS */}

      <section className="portfolio-section education-section" id="formation">
        <SectionHeading
          number="05"
          eyebrow="MON PARCOURS ACADÉMIQUE"
          title="Construire des bases"
          accent="solides."
          description="Un parcours universitaire en génie logiciel, systèmes d'information, Business Intelligence et Big Data."
        />

        <div className="education-editorial">
          {portfolioEducation.map((item, index) => (
            <motion.article
              className={`education-record education-record-${index + 1}`}
              key={item.title}
              style={{ "--education-color": item.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="education-record-top">
                <span className="education-period">{item.period}</span>
                <span className="education-record-number">0{index + 1}</span>
              </div>

              <div className="education-institution">
                <CompanyLogo src={item.image} name={item.school} />
                <span>{item.school}</span>
              </div>

              <div className="education-title-row">
                <GraduationCap size={24} />
                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>

              <div className="education-record-bottom">
                <span className="education-accent-line" />
                <span>FORMATION</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="portfolio-centered-action">
          <Link to="/formation" className="portfolio-action-button">
            Voir tout mon parcours académique
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 08 — CLUBS : PETITES ENTRÉES ÉDITORIALES */}
      <section className="portfolio-section organizations-section" id="organisations">
        <SectionHeading
          number="07"
          eyebrow="VIE UNIVERSITAIRE"
          title="Au-delà des cours,"
          accent="la curiosité."
          description="Les clubs universitaires auxquels j'ai participé pendant mon parcours."
        />

        <div className="organization-list">
          {portfolioOrganizations.map((organization, index) => {
            const Icon = organization.icon;

            return (
              <motion.article
                className="organization-row"
                key={organization.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="organization-icon">
                  <Icon size={24} />
                </div>

                <div className="organization-content">
                  <span>{organization.period}</span>
                  <h3>{organization.name}</h3>
                  <p>{organization.description}</p>
                </div>

                <ArrowUpRight size={21} className="organization-arrow" />
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* 09 — CONTACT */}

      <section className="portfolio-section contact-section" id="contact">
        <div className="portfolio-contact-card">
          <div className="contact-decoration contact-decoration-one" />
          <div className="contact-decoration contact-decoration-two" />

          <span className="portfolio-eyebrow">
            <Sparkles size={14} />
            PARLONS DE VOTRE PROJET
          </span>

          <h2>
            Et si nous créions
            <br />
            <span>quelque chose ensemble ?</span>
          </h2>

          <p>
            Je suis ouverte aux opportunités en Data, Business Intelligence,
            Data Science et intelligence artificielle.
          </p>

          <div className="portfolio-contact-actions">
            <Link to="/contact" className="portfolio-action-button">
              <Mail size={18} />
              Me contacter
            </Link>

            <a
              href="https://www.linkedin.com/in/abir-harbaoui-911192224/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-action-button portfolio-action-outline"
            >
              LinkedIn
              <ExternalLink size={17} />
            </a>
          </div>

          <a
            className="portfolio-contact-email"
            href="mailto:abirharbaoui65@gmail.com"
          >
            abirharbaoui65@gmail.com
          </a>
        </div>
      </section>

      {/* 10 — FOOTER */}

      <footer className="home-bottom portfolio-footer">
        <span className="home-bottom-line" />
        <span>ABIR HARBAOUI · DATA · TECHNOLOGY · INNOVATION</span>
        <span className="home-bottom-line" />
      </footer>
    </main>
  );
}

