import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  Database,
  BarChart3,
  Code2,
  Cpu,
  Activity,
  ShoppingCart,
  Building2,
  GraduationCap,
  ArrowUpRight,
  Layers,
  Search,
  Workflow,
  FileSearch,
  Network,
  HeartPulse,
  Eye,
  Car,
  Flower2,
  Mail,
  Users,
  Stethoscope,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Projets.css";

// =========================================================================
// COULEURS DES TECHNOLOGIES
// =========================================================================
const techColors = {
  Python: "#3776AB",
  Flask: "#000000",
  React: "#61DAFB",
  Ollama: "#FFFFFF",
  Qwen: "#8B5CF6",
  PyMuPDF: "#E11D48",
  SQLite: "#003B57",
  "Node.js": "#339933",
  Express: "#000000",
  PostgreSQL: "#4169E1",
  JWT: "#D63AFF",
  Groq: "#F55036",
  LLaMA: "#0467DF",
  n8n: "#EA4B71",
  YOLO: "#00FFFF",
  ByteTrack: "#FF6B6B",
  MongoDB: "#47A248",
  ESP32: "#E7352C",
  "Power BI": "#F2C811",
  "React.js": "#61DAFB",
  "MongoDB Atlas": "#47A248",
  "Gemini API": "#4285F4",
  Puppeteer: "#40B5A4",
  Django: "#092E20",
  MySQL: "#4479A1",
  OpenCV: "#5C3EE8",
  NLTK: "#154F5B",
  Odoo: "#714B67",
  "SQL Server": "#CC2927",
  SSIS: "#CC2927",
  ETL: "#9B59B6",
  "Apache Kafka": "#231F20",
  "Apache Spark": "#E25A1C",
  Hadoop: "#66CCFF",
  YOLO11x: "#00FFFF",
  Pandas: "#150458",
  "Data Analysis": "#9B59B6",
  "Data Visualization": "#9B59B6",
  TensorFlow: "#FF6F00",
  Keras: "#D00000",
  CNN: "#FF6F00",
  Jupyter: "#F37626",
  "Scikit-Learn": "#F7931E",
  Matplotlib: "#11557C",
  Streamlit: "#FF4B4B",
  Seaborn: "#4C72B0",
  "Spring Boot": "#6DB33F",
  Thymeleaf: "#005F0F",
  Java: "#007396",
  Maven: "#C71A36",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  Bootstrap: "#7952B3",
};

// =========================================================================
// COMPOSANT BADGE TECHNOLOGIE
// =========================================================================
const TechBadge = ({ name }) => {
  const color = techColors[name] || "#9B59B6";
  return (
    <span className="project-tech-badge" title={name}>
      <span className="project-tech-badge-dot" style={{ background: color }} />
      {name}
    </span>
  );
};

// =========================================================================
// DONNÉES DES PROJETS (Images référencées depuis le dossier public/)
// =========================================================================
const projects = [
  {
    id: 1,
    title: "CVSmart AI",
    subtitle: "Analyse intelligente de CV",
    category: "Data Science & IA",
    type: "Projet personnel",
    date: "Projet personnel",
    sortDate: 202610,
    icon: FileSearch,
    accent: "rose",
    featured: true,
    description: [
      "Conception d’un assistant intelligent pour analyser des CV et faciliter leur amélioration.",
      "Analyse des informations du CV : formation, expériences, compétences et coordonnées.",
      "Génération d’un score, de remarques et de suggestions de correction.",
      "Développement d’une API backend avec Flask et intégration d’un modèle local via Ollama.",
    ],
    technologies: ["Python", "Flask", "React", "Ollama", "Qwen", "PyMuPDF"],
    status: "En développement",
    thumbnail: "/cvsmart.PNG", 
  },
  {
    id: 2,
    title: "StudyAgent",
    subtitle: "Assistant IA pour l’apprentissage",
    category: "Data Science & IA",
    type: "Projet personnel",
    date: "Projet personnel",
    sortDate: 202609,
    icon: GraduationCap,
    accent: "violet",
    featured: true,
    description: [
      "Développement d’un assistant éducatif qui transforme les documents de cours en supports interactifs.",
      "Importation et analyse de documents PDF.",
      "Génération de résumés, de quiz et de réponses aux questions sur les cours.",
      "Utilisation d’un modèle de langage local pour éviter de dépendre d’une clé API payante.",
    ],
    technologies: ["Python", "Flask", "Ollama", "Qwen", "SQLite", "PyMuPDF"],
    status: "Projet personnel",
    thumbnail: "/StudyAgent.PNG",
  },
  {
    id: 4,
    title: "PlayMetrics",
    subtitle: "Analyse des performances footballistiques",
    category: "Data Science & IA",
    type: "Projet Data & IA",
    date: "Projet personnel / académique",
    sortDate: 202506,
    icon: Activity,
    accent: "pink",
    featured: true,
    description: [
      "Analyse des performances individuelles et collectives dans le football.",
      "Utilisation de la vision par ordinateur pour détecter et suivre les joueurs.",
      "Exploration de données issues de capteurs et de dispositifs IoT.",
      "Exploitation des données et visualisation d’indicateurs de performance.",
    ],
    technologies: ["Python", "YOLO", "ByteTrack", "Flask", "MongoDB", "ESP32", "Power BI"],
    status: "Projet Data & IA",
    thumbnail: "/PlayMetrics.PNG",
  },
  {
    id: 5,
    title: "Plateforme d’analyse pour cabinets dentaires",
    subtitle: "KPI, rapports et assistant conversationnel",
    category: "Développement",
    type: "Projet / expérience",
    date: "Septembre 2023 — Juillet 2025",
    sortDate: 202507,
    icon: Building2,
    accent: "rose",
    featured: false,
    description: [
      "Développement d’une plateforme d’analyse des performances destinée aux cabinets dentaires en France.",
      "Intégration d’un chatbot conversationnel basé sur l’intelligence artificielle et le NLP.",
      "Génération de rapports PDF et de recommandations personnalisées.",
      "Développement d’une application web connectée à une base de données.",
    ],
    technologies: ["React.js", "Flask", "MongoDB Atlas", "JWT", "Gemini API", "Puppeteer"],
    status: "Projet / expérience",
    thumbnail: "/projet attijari.PNG",
  },
  {
    id: 6,
    title: "Application web e-commerce intelligente",
    subtitle: "Reconnaissance faciale et analyse des sentiments",
    category: "Développement",
    type: "Projet académique",
    date: "Septembre 2023 — Janvier 2024",
    sortDate: 202401,
    icon: ShoppingCart,
    accent: "violet",
    featured: false,
    description: [
      "Développement d’une application web de commerce électronique.",
      "Intégration d’une fonctionnalité de reconnaissance faciale.",
      "Exploration de l’analyse des sentiments à partir de techniques de traitement du langage naturel.",
      "Gestion des données avec des bases de données relationnelles.",
    ],
    technologies: ["Django", "Python", "SQLite", "MySQL", "OpenCV", "NLTK"],
    status: "Projet académique",
    thumbnail: "", // Pas d'image pour ce projet
  },
  {
    id: 7,
    title: "Solutions ERP avec Odoo",
    subtitle: "Intégration de processus métier",
    category: "Data Engineering",
    type: "Projet académique",
    date: "Septembre 2024 — Janvier 2025",
    sortDate: 202501,
    icon: Workflow,
    accent: "blue",
    featured: false,
    description: [
      "Configuration et intégration de processus métier dans un environnement ERP.",
      "Mise en place de flux liés aux ventes, aux achats, à la fabrication et à la facturation.",
      "Création et gestion de nomenclatures.",
      "Exploration de l’intégration entre Odoo et des outils développés avec Python.",
    ],
    technologies: ["Odoo", "Python", "Flask", "PostgreSQL"],
    status: "Projet académique",
    thumbnail: "/odoo.PNG",
  },
  {
    id: 8,
    title: "Application Business Intelligence",
    subtitle: "ETL, entrepôt de données et tableaux de bord",
    category: "Data & BI",
    type: "Projet académique",
    date: "Septembre 2024 — Janvier 2025",
    sortDate: 202501,
    icon: BarChart3,
    accent: "pink",
    featured: false,
    description: [
      "Préparation et transformation des données pour alimenter un entrepôt de données.",
      "Mise en place d’un processus ETL pour nettoyer et transformer les données.",
      "Organisation des données pour faciliter l’analyse et le reporting.",
      "Création de visualisations interactives pour soutenir la prise de décision.",
    ],
    technologies: ["SQL Server", "SSIS", "Power BI", "ETL"],
    status: "Projet académique",
    thumbnail: "/appliBI.PNG",
  },
  {
    id: 9,
    title: "Analyse Big Data du transport en Finlande",
    subtitle: "Traitement de flux de données en temps réel",
    category: "Data Engineering",
    type: "Projet académique",
    date: "Janvier 2024 — Mai 2024",
    sortDate: 202405,
    icon: Database,
    accent: "violet",
    featured: false,
    description: [
      "Étude d’un système d’analyse des itinéraires et des positions GPS du réseau de transport.",
      "Ingestion des données en temps réel avec une architecture de streaming.",
      "Traitement des flux pour calculer des indicateurs tels que les délais et les temps de trajet.",
      "Stockage des données et visualisation des résultats pour faciliter l’analyse.",
    ],
    technologies: ["Apache Kafka", "Apache Spark", "Hadoop", "Power BI"],
    status: "Projet académique",
    thumbnail: "/finland.PNG",
  },
  {
    id: 10,
    title: "Vehicle Counter",
    subtitle: "Détection et comptage de véhicules",
    category: "Data Science & IA",
    type: "Projet de vision par ordinateur",
    date: "Projet Data & IA",
    sortDate: 202403,
    icon: Car,
    accent: "blue",
    featured: false,
    description: [
      "Exploration d’un système de détection et de comptage automatique de véhicules dans une vidéo.",
      "Utilisation d’un modèle de détection d’objets pour identifier les véhicules.",
      "Traitement des images et des séquences vidéo pour analyser les passages.",
    ],
    technologies: ["Python", "YOLO11x", "OpenCV"],
    status: "Projet Data & IA",
    thumbnail: "/car.PNG",
  },
  {
    id: 11,
    title: "Analyse de données FIFA",
    subtitle: "Exploration et visualisation de données sportives",
    category: "Data & BI",
    type: "Projet Data",
    date: "Projet Data",
    sortDate: 202302,
    icon: BarChart3,
    accent: "rose",
    featured: false,
    description: [
      "Exploration d’un jeu de données consacré au football et aux joueurs.",
      "Préparation des données pour faciliter leur analyse.",
      "Analyse descriptive des indicateurs et comparaison des caractéristiques des joueurs.",
      "Présentation des résultats sous forme de visualisations.",
    ],
    technologies: ["Python", "Pandas", "Data Analysis", "Data Visualization"],
    status: "Projet Data",
    thumbnail: "/fifa.PNG", // Pas d'image pour ce projet
  },
  {
    id: 12,
    title: "Skin Cancer CNN",
    subtitle: "Classification d'images médicales",
    category: "Data Science & IA",
    type: "Projet Deep Learning",
    date: "Projet académique",
    sortDate: 202403,
    icon: HeartPulse,
    accent: "rose",
    featured: false,
    description: [
      "Développement d’un modèle de réseau de neurones convolutifs (CNN) pour la détection du cancer de la peau.",
      "Entraînement sur des images dermatologiques.",
      "Application de techniques de vision par ordinateur pour l’aide au diagnostic.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Jupyter"],
    status: "Projet Deep Learning",
    thumbnail: "/scin.PNG",
  },
  {
    id: 13,
    title: "Gender & Age Prediction CNN",
    subtitle: "Prédiction par vision par ordinateur",
    category: "Data Science & IA",
    type: "Projet Deep Learning",
    date: "Projet académique",
    sortDate: 202402,
    icon: Eye,
    accent: "violet",
    featured: false,
    description: [
      "Développement d’un modèle de deep learning utilisant des CNN pour prédire le genre et l’âge.",
      "Entraînement sur des jeux de données d’images faciales.",
      "Utilisation de techniques de prétraitement d’images.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
    status: "Projet Deep Learning",
    thumbnail: "/age.PNG",
  },
  {
    id: 14,
    title: "Facial Emotion Recognition",
    subtitle: "Reconnaissance des émotions faciales",
    category: "Data Science & IA",
    type: "Projet Deep Learning",
    date: "Projet académique",
    sortDate: 202401,
    icon: Eye,
    accent: "blue",
    featured: false,
    description: [
      "Reconnaissance des émotions faciales à l’aide d’un modèle CNN.",
      "Classification des expressions humaines (joie, tristesse, colère, etc.).",
      "Développement d’un pipeline de traitement d’images.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
    status: "Projet Deep Learning",
    thumbnail: "/facial.PNG", // Pas d'image pour ce projet
  },
  {
    id: 15,
    title: "Laptop Price Prediction",
    subtitle: "Prédiction de prix par Machine Learning",
    category: "Data Science & IA",
    type: "Projet Machine Learning",
    date: "Projet académique",
    sortDate: 202401,
    icon: Cpu,
    accent: "pink",
    featured: false,
    description: [
      "Utilisation du machine learning pour prédire les prix des laptops.",
      "Analyse des spécifications techniques (RAM, CPU, GPU, etc.).",
      "Entraînement de modèles de régression.",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    status: "Projet Machine Learning",
    thumbnail: "/laptop.PNG", // Pas d'image pour ce projet
  },
  {
    id: 16,
    title: "Système de Recommandation de Films",
    subtitle: "Recommandation par filtrage collaboratif",
    category: "Data Science & IA",
    type: "Projet Machine Learning",
    date: "Projet académique",
    sortDate: 202312,
    icon: Activity,
    accent: "rose",
    featured: false,
    description: [
      "Développement d’un système de recommandation de films.",
      "Interface utilisateur interactive avec Streamlit.",
      "Recommandations basées sur les préférences utilisateur.",
    ],
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-Learn"],
    status: "Projet Machine Learning",
    thumbnail: "/movie.PNG", // Pas d'image pour ce projet
  },
  {
    id: 17,
    title: "Classification Email Spam",
    subtitle: "Détection de spam par NLP",
    category: "Data Science & IA",
    type: "Projet Machine Learning",
    date: "Projet académique",
    sortDate: 202311,
    icon: Mail,
    accent: "violet",
    featured: false,
    description: [
      "Classification d’e-mails en spam ou non-spam.",
      "Utilisation de techniques de machine learning supervisé (Naive Bayes).",
      "Prétraitement du texte et extraction de caractéristiques.",
    ],
    technologies: ["Python", "Scikit-Learn", "NLTK", "Pandas"],
    status: "Projet Machine Learning",
    thumbnail: "/emailspam.PNG",
  },
  {
    id: 18,
    title: "Évaluation 360",
    subtitle: "Application de gestion des employés",
    category: "Développement",
    type: "Projet de fin d'études",
    date: "Projet académique",
    sortDate: 202306,
    icon: Users,
    accent: "blue",
    featured: false,
    description: [
      "Conception et réalisation d’une application de gestion des employés.",
      "Système d’évaluation 360 degrés.",
      "Frontend avec Thymeleaf et backend Java.",
    ],
    technologies: ["Java", "Spring Boot", "Thymeleaf", "HTML", "CSS"],
    status: "Projet académique",
    thumbnail: "", // Pas d'image pour ce projet
  },
  {
    id: 20,
    title: "Classification de Fleurs (CNN)",
    subtitle: "Reconnaissance d'images par Deep Learning",
    category: "Data Science & IA",
    type: "Projet Deep Learning",
    date: "Projet académique",
    sortDate: 202304,
    icon: Flower2,
    accent: "rose",
    featured: false,
    description: [
      "Implémentation d’un modèle de classification d’images de fleurs.",
      "Réseau de neurones convolutif (CNN) avec TensorFlow et Keras.",
      "Application web pour la prédiction.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Flask"],
    status: "Projet Deep Learning",
    thumbnail: "/flower.png",
  },
  {
    id: 21,
    title: "Cat vs Dog CNN Classifier",
    subtitle: "Classification d'images d'animaux",
    category: "Data Science & IA",
    type: "Projet Deep Learning",
    date: "Projet académique",
    sortDate: 202303,
    icon: Activity,
    accent: "violet",
    featured: false,
    description: [
      "Classification d’images de chats et de chiens.",
      "Utilisation de réseaux de neurones convolutifs.",
      "Entraînement sur un jeu de données d’images.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Jupyter"],
    status: "Projet Deep Learning",
    thumbnail: "/cat.png",
  },
  {
    id: 22,
    title: "CodeAlpha - Iris Flower Classification",
    subtitle: "Classification de fleurs d'Iris",
    category: "Data Science & IA",
    type: "Projet Machine Learning",
    date: "Projet académique",
    sortDate: 202302,
    icon: Flower2,
    accent: "pink",
    featured: false,
    description: [
      "Classification des espèces de fleurs d’Iris.",
      "Utilisation d’algorithmes de machine learning supervisé.",
      "Analyse exploratoire des données.",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    status: "Projet Machine Learning",
    thumbnail: "/flower.png",
  }
];

const filters = [
  "Tous",
  "Data & BI",
  "Data Engineering",
  "Data Science & IA",
  "Développement",
];

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => b.sortDate - a.sortDate),
    []
  );

  const filteredProjects = sortedProjects.filter((project) => {
    const matchesFilter =
      activeFilter === "Tous" || project.category === activeFilter;

    const searchableText = [
      project.title,
      project.subtitle,
      project.category,
      project.type,
      ...project.technologies,
      ...project.description,
    ]
      .join(" ")
      .toLowerCase();

    return matchesFilter && searchableText.includes(searchTerm.toLowerCase());
  });

  const categoryCount = new Set(
    projects.map((project) => project.category)
  ).size;

  return (
    <main className="projects-page">
      <div className="projects-background">
        <div className="projects-grid-bg" />
        <div className="projects-orb projects-orb-one" />
        <div className="projects-orb projects-orb-two" />
      </div>

      <section className="projects-hero">
        <motion.div
          className="projects-hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-eyebrow">
            <Sparkles size={15} />
            <span>MON UNIVERS TECHNIQUE</span>
          </div>

          <h1>
            Mes <span>projets</span>
            <br />
            Data, BI & IA
          </h1>

          <p>
            Des projets académiques et personnels qui illustrent mon parcours
            en analyse de données, Business Intelligence, développement
            logiciel et intelligence artificielle.
          </p>

          <div className="projects-hero-stats">
            <div>
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>Projets présentés</span>
            </div>
            <i />
            <div>
              <strong>{String(categoryCount).padStart(2, "0")}</strong>
              <span>Domaines techniques</span>
            </div>
            <i />
            <div className="projects-stat-ai">
              <BrainCircuit size={25} />
              <span>Data & IA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="projects-hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="projects-visual-ring projects-visual-ring-one" />
          <div className="projects-visual-ring projects-visual-ring-two" />
          <div className="projects-visual-core">
            <Layers size={43} strokeWidth={1.35} />
            <span>IDEAS → IMPACT</span>
          </div>
          <div className="projects-float-icon projects-float-one">
            <Database size={21} />
          </div>
          <div className="projects-float-icon projects-float-two">
            <BrainCircuit size={21} />
          </div>
          <div className="projects-float-icon projects-float-three">
            <BarChart3 size={21} />
          </div>
          <div className="projects-float-icon projects-float-four">
            <Code2 size={21} />
          </div>
        </motion.div>
      </section>

      <section className="projects-content">
        <div className="projects-section-heading">
          <div>
            <span className="projects-section-kicker">
              PORTFOLIO TECHNIQUE
            </span>
            <h2>Explorer mes réalisations</h2>
            <p>Filtre les projets par domaine ou recherche une technologie.</p>
          </div>
          <div className="projects-result-count">
            <strong>{String(filteredProjects.length).padStart(2, "0")}</strong>
            <span>projets</span>
          </div>
        </div>

        <div className="projects-toolbar">
          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`projects-filter ${
                  activeFilter === filter ? "active" : ""
                }`}
              >
                {filter === "Tous" && <Layers size={15} />}
                {filter === "Data & BI" && <BarChart3 size={15} />}
                {filter === "Data Engineering" && <Database size={15} />}
                {filter === "Data Science & IA" && <BrainCircuit size={15} />}
                {filter === "Développement" && <Code2 size={15} />}
                {filter}
              </button>
            ))}
          </div>

          <label className="projects-search">
            <Search size={17} />
            <input
              type="search"
              placeholder="Rechercher un projet ou une technologie..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Rechercher un projet ou une technologie"
            />
          </label>
        </div>

        <div className="projects-grid-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const hasImage = project.thumbnail && project.thumbnail.trim() !== "";

              return (
                <motion.article
                  className={`project-card-v2 project-accent-${project.accent}`}
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.035 }}
                >
                  {/* GESTION DE L'IMAGE : Si l'image existe, on l'affiche. Sinon, on affiche un dégradé. */}
                  <div className={`project-card-v2-image ${!hasImage ? 'img-error' : ''}`}>
                    {hasImage && (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('img-error');
                        }}
                      />
                    )}
                    <div className="project-card-v2-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="project-card-v2-content">
                    <div className="project-card-v2-header">
                      <span className="project-category-label">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="project-featured-label">
                          <Sparkles size={12} /> À découvrir
                        </span>
                      )}
                    </div>

                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>

                    <div className="project-tech-preview">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="project-more-tech">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="project-card-v2-footer">
                      <div className="project-date-row">
                        <span className="project-status-dot" />
                        <span>{project.status}</span>
                      </div>

                      <button
                        type="button"
                        className="project-arrow-btn"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Voir le projet ${project.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <Search size={28} />
            <h3>Aucun projet trouvé</h3>
            <p>Essaie un autre mot-clé ou sélectionne une autre catégorie.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("Tous");
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

      {/* MODAL DÉTAILS */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              {/* GESTION DE L'IMAGE DANS LA MODAL */}
              <div className={`project-modal-image ${!selectedProject.thumbnail ? 'img-error' : ''}`}>
                {selectedProject.thumbnail && (
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('img-error');
                    }}
                  />
                )}
              </div>

              <div className="project-modal-body">
                <span className="project-list-category">
                  {selectedProject.category}
                </span>
                <h2>{selectedProject.title}</h2>
                <p className="project-modal-subtitle">
                  {selectedProject.subtitle}
                </p>

                <div className="project-modal-meta">
                  <span>{selectedProject.date}</span>
                  <span className="project-list-type">
                    {selectedProject.type}
                  </span>
                  <span className="project-list-status">
                    <span className="project-status-dot" />
                    {selectedProject.status}
                  </span>
                </div>

                <h4>
                  <Sparkles size={16} /> Description
                </h4>
                <ul className="project-modal-list">
                  {selectedProject.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h4>
                  <Code2 size={16} /> Technologies
                </h4>
                <div className="project-tech-list">
                  {selectedProject.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="project-modal-actions">
                  <a
                    href="https://github.com/AbirHarbaoui"
                    target="_blank"
                    rel="noreferrer"
                    className="projects-secondary-button"
                  >
                    <Code2 size={16} /> Voir sur GitHub
                  </a>
                  <Link to="/contact" className="projects-primary-button">
                    Me contacter <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="projects-cta">
        <div className="projects-cta-glow" />
        <div className="projects-cta-content">
          <span className="projects-section-kicker">
            ENVIE D’EN SAVOIR PLUS ?
          </span>
          <h2>Construisons quelque chose d’utile</h2>
          <p>
            Tu souhaites échanger sur mes projets, mes compétences ou une
            opportunité en Data, BI ou intelligence artificielle ?
          </p>
          <div className="projects-cta-actions">
            <Link to="/contact" className="projects-primary-button">
              Me contacter <ArrowUpRight size={17} />
            </Link>
            <a
              href="https://github.com/AbirHarbaoui"
              target="_blank"
              rel="noreferrer"
              className="projects-secondary-button"
            >
              <Code2 size={17} /> Mon GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}