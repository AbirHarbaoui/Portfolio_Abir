
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BarChart3,
  Database,
  BrainCircuit,
  Code2,
  GitBranch,
  Workflow,
  Server,
  FileSpreadsheet,
  Layers3,
  Terminal,
  Cpu,
  ArrowUpRight,
  ChevronRight,
  Zap,
} from "lucide-react";
import "./Competences.css";

const categories = [
  { id: "all", label: "Toutes", icon: Sparkles },
  { id: "bi", label: "Data & BI", icon: BarChart3 },
  { id: "engineering", label: "Data Engineering", icon: Database },
  { id: "ai", label: "Data Science & IA", icon: BrainCircuit },
  { id: "development", label: "Développement", icon: Code2 },
  { id: "tools", label: "Outils", icon: Workflow },
];

const skills = [
  {
    name: "Power BI",
    category: "bi",
    logo: "https://cdn.simpleicons.org/powerbi/F2C811",
    icon: BarChart3,
    description:
      "Création de tableaux de bord, visualisation des données et suivi des indicateurs clés.",
    tags: ["Dashboards", "KPI", "Reporting"],
    featured: true,
  },
  {
    name: "SQL",
    category: "bi",
    icon: Database,
    description:
      "Interrogation des bases de données, extraction, jointures et analyse des données.",
    tags: ["Requêtes", "Analyse", "Données"],
    featured: true,
  },
  {
    name: "DAX & Power Query",
    category: "bi",
    icon: FileSpreadsheet,
    description:
      "Préparation des données, transformations et création de mesures pour les rapports décisionnels.",
    tags: ["Mesures", "Transformation"],
  },
  {
    name: "ETL & Talend",
    category: "engineering",
    logo: "https://cdn.simpleicons.org/talend/FF6D70",
    icon: Workflow,
    description:
      "Intégration, transformation et préparation de données dans des flux ETL.",
    tags: ["ETL", "Intégration"],
    featured: true,
  },
  {
    name: "Modélisation des données",
    category: "engineering",
    icon: Layers3,
    description:
      "Organisation des données et conception de modèles adaptés à l'analyse décisionnelle.",
    tags: ["Modèle dimensionnel", "Data"],
  },
  {
    name: "Bases de données",
    category: "engineering",
    icon: Server,
    description:
      "Travail avec des bases relationnelles et NoSQL selon les besoins des applications.",
    tags: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Python",
    category: "ai",
    logo: "https://cdn.simpleicons.org/python/3776AB",
    icon: Terminal,
    description:
      "Analyse de données, automatisation, traitement de fichiers et développement d'applications IA.",
    tags: ["Pandas", "NumPy", "Flask"],
    featured: true,
  },
  {
    name: "Machine Learning",
    category: "ai",
    logo: "https://cdn.simpleicons.org/scikitlearn/F7931E",
    icon: BrainCircuit,
    description:
      "Préparation de données, expérimentation de modèles et réalisation de projets prédictifs.",
    tags: ["Scikit-learn", "Prédiction"],
  },
  {
    name: "Deep Learning & Computer Vision",
    category: "ai",
    logo: "https://cdn.simpleicons.org/opencv/5C3EE8",
    icon: Cpu,
    description:
      "Expérimentation de modèles de vision par ordinateur pour la détection et l'analyse d'images.",
    tags: ["YOLO", "OpenCV"],
  },
  {
    name: "Intelligence artificielle générative",
    category: "ai",
    logo: "https://cdn.simpleicons.org/openai/412991",
    icon: Sparkles,
    description:
      "Développement de projets d'assistance intelligente et intégration de modèles de langage.",
    tags: ["Chatbots", "LLM", "Projets IA"],
  },
  {
    name: "React",
    category: "development",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    icon: Code2,
    description:
      "Création d'interfaces web dynamiques, de composants réutilisables et d'expériences utilisateur.",
    tags: ["JavaScript", "UI", "Composants"],
  },
  {
    name: "Flask & API",
    category: "development",
    logo: "https://cdn.simpleicons.org/flask/FFFFFF",
    icon: Server,
    description:
      "Développement de backends Python et de points d'accès API pour des applications web et IA.",
    tags: ["Python", "REST API"],
  },
  {
    name: "Java & JEE",
    category: "development",
    logo: "https://cdn.simpleicons.org/openjdk/437291",
    icon: Code2,
    description:
      "Programmation et développement d'applications dans le cadre de projets informatiques.",
    tags: ["Java", "JEE"],
  },
  {
    name: "HTML, CSS & JavaScript",
    category: "development",
    logo: "https://cdn.simpleicons.org/html5/E34F26",
    icon: Layers3,
    description:
      "Construction de pages web structurées, responsives et interactives.",
    tags: ["Frontend", "Responsive"],
  },
  {
    name: "Git & GitHub",
    category: "tools",
    logo: "https://cdn.simpleicons.org/github/FFFFFF",
    icon: GitBranch,
    description:
      "Gestion du code source, suivi des modifications et collaboration sur les projets.",
    tags: ["Versioning", "Collaboration"],
  },
  {
    name: "Environnements Data",
    category: "tools",
    logo: "https://cdn.simpleicons.org/jupyter/F37626",
    icon: Terminal,
    description:
      "Utilisation d'environnements de développement et de notebooks pour expérimenter et analyser.",
    tags: ["Jupyter", "Google Colab"],
  },
];

const categoryNames = {
  bi: "Data & Business Intelligence",
  engineering: "Data Engineering & Big Data",
  ai: "Data Science & Intelligence Artificielle",
  development: "Développement logiciel",
  tools: "Outils & environnements",
};

const domains = [
  {
    icon: BarChart3,
    number: "01",
    title: "Data & Business Intelligence",
    description:
      "Transformer les données en informations utiles à la décision.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data Engineering",
    description:
      "Préparer, intégrer et structurer les données.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Data Science & IA",
    description:
      "Explorer les données et expérimenter des solutions intelligentes.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Développement",
    description:
      "Construire des applications qui relient les données aux utilisateurs.",
  },
];

export default function Competences() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <main className="competences-page">
      <div className="competences-background-grid" />
      <div className="competences-orb competences-orb-one" />
      <div className="competences-orb competences-orb-two" />

      {/* HERO */}
      <section className="competences-hero">
        <motion.div
          className="competences-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="competences-eyebrow">
            <Sparkles size={15} />
            MON UNIVERS TECHNIQUE
          </span>

          <h1>
            Mes <span>compétences</span>
            <br />
            au service de la Data
          </h1>

          <p>
            De la préparation des données à leur visualisation, en passant
            par le développement et l'intelligence artificielle, découvre
            les technologies que j'explore et mets en pratique dans mes projets.
          </p>

          <a
            href="#competences-list"
            className="competences-primary-button"
          >
            Explorer mes compétences
            <ChevronRight size={18} />
          </a>

          <div className="competences-hero-note">
            <span className="competences-status-dot" />
            Data · BI · Big Data · Intelligence Artificielle
          </div>
        </motion.div>

        <motion.div
          className="competences-hero-visual"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="competences-visual-ring competences-ring-one" />
          <div className="competences-visual-ring competences-ring-two" />
          <div className="competences-visual-ring competences-ring-three" />

          <div className="competences-visual-center">
            <BrainCircuit size={54} strokeWidth={1.3} />
            <span>DATA</span>
            <strong>INTELLIGENCE</strong>
          </div>

          <div className="competences-orbit-icon competences-orbit-icon-one">
            <BarChart3 size={23} />
          </div>

          <div className="competences-orbit-icon competences-orbit-icon-two">
            <Database size={23} />
          </div>

          <div className="competences-orbit-icon competences-orbit-icon-three">
            <Code2 size={23} />
          </div>

          <div className="competences-orbit-icon competences-orbit-icon-four">
            <Cpu size={23} />
          </div>

          <div className="competences-floating-label">
            <Zap size={16} />
            <span>Learn · Build · Innovate</span>
          </div>
        </motion.div>
      </section>

      {/* DOMAINES */}
      <section className="competences-domains">
        {domains.map((domain, index) => {
          const Icon = domain.icon;

          return (
            <motion.article
              className="competences-domain-card"
              key={domain.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="competences-domain-top">
                <span>{domain.number}</span>
                <Icon size={23} />
              </div>

              <h2>{domain.title}</h2>
              <p>{domain.description}</p>
            </motion.article>
          );
        })}
      </section>

      {/* LISTE DES COMPÉTENCES */}
      <section
        className="competences-section"
        id="competences-list"
      >
        <div className="competences-section-heading">
          <span className="competences-eyebrow">
            <Sparkles size={15} />
            BOÎTE À OUTILS
          </span>

          <h2>
            Technologies & <span>outils</span>
          </h2>

          <p>
            Explore les technologies par domaine et découvre comment
            elles s'intègrent dans mon univers informatique.
          </p>
        </div>

        {/* Filtres interactifs */}
        <div
          className="competences-filters"
          role="group"
          aria-label="Filtrer les compétences par catégorie"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                className={`competences-filter ${
                  isActive ? "competences-filter-active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
              >
                <Icon size={16} />
                {category.label}
              </button>
            );
          })}
        </div>

        <motion.div
          className="competences-results-count"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>
            {filteredSkills.length} compétences affichées
          </span>
          <span className="competences-results-line" />
        </motion.div>

        <motion.div
          className="competences-skills-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  className={`competences-skill-card ${
                    skill.featured ? "competences-skill-featured" : ""
                  }`}
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{
                    duration: 0.28,
                    delay: Math.min(index * 0.025, 0.2),
                    layout: { duration: 0.25 },
                  }}
                >
                  <div className="competences-skill-top">
                    <div className="competences-skill-icon">
                      {skill.logo ? (
                        <img
                          className="competences-skill-logo"
                          src={skill.logo}
                          alt={`Logo ${skill.name}`}
                          loading="lazy"
                          style={{
                            width: 30,
                            height: 30,
                            objectFit: "contain",
                          }}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <Icon size={24} />
                      )}
                    </div>

                    {skill.featured && (
                      <span className="competences-featured-label">
                        <Sparkles size={12} />
                        Essentiel
                      </span>
                    )}
                  </div>

                  <span className="competences-skill-category">
                    {categoryNames[skill.category]}
                  </span>

                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>

                  <div className="competences-skill-tags">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="competences-skill-bottom">
                    <span>Explorer le domaine</span>
                    <ArrowUpRight size={17} />
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
