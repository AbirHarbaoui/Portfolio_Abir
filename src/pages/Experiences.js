
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Database,
  BrainCircuit,
  Code2,
  BarChart3,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Network,
  Clock3,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Experiences.css";

const experiences = [
  {
    id: 1,
    company: "Shell Sedjoumi",
    role: "Ingénieure informatique",
    category: "Développement",
    domain: "Application de gestion",
    location: "Tunisie",
    startDate: "2026-06",
    endDate: "2026-09",
    date: "Juin 2026 — Septembre 2026",
    duration: "4 mois",
    type: "Expérience professionnelle",
    icon: Briefcase,
    accent: "rose",
    description: [
      "Participation à la conception et au développement d’une application de gestion du kiosque Shell.",
      "Automatisation du suivi des ventes de carburants, des stocks et des services de lavage et de vidange.",
      "Gestion de la caisse, des crédits clients, des employés et de la paie.",
    ],
    technologies: ["React.js", "Java", "JEE", "Python", "IA", "SQL"],
  },
  {
    id: 2,
    company: "Syrine School",
    role: "Assistante administrative & Data Analyst",
    category: "Data & BI",
    domain: "Analyse de données",
    location: "Tunisie",
    startDate: "2025-10",
    endDate: "2026-05",
    date: "Octobre 2025 — Mai 2026",
    duration: "8 mois",
    type: "Expérience professionnelle",
    icon: BarChart3,
    accent: "violet",
    description: [
      "Gestion et organisation des données administratives relatives aux élèves et aux enseignants.",
      "Suivi des emplois du temps, des absences, des notes et des examens.",
      "Analyse des données financières et création de tableaux de bord pour suivre les paiements, les revenus et les KPI.",
    ],
    technologies: ["Excel", "Power Query", "Power BI", "Reporting", "KPI"],
  },
  {
    id: 3,
    company: "CodeAlpha",
    role: "Stagiaire Data Scientist",
    category: "Data Science & IA",
    domain: "Machine Learning",
    location: "Stage",
    startDate: "2025-07",
    endDate: "2025-07",
    date: "Juillet 2025",
    duration: "1 mois",
    type: "Stage",
    icon: BrainCircuit,
    accent: "blue",
    description: [
      "Développement de modèles de Machine Learning pour répondre à plusieurs problématiques de Data Science.",
      "Classification des fleurs Iris, analyse de l’impact du COVID sur le chômage et prédiction des prix automobiles.",
      "Réalisation d’une application Flask interactive pour la prévision des ventes.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Flask",
      "GitHub",
    ],
  },
  {
    id: 4,
    company: "Elite Council Consulting",
    role: "Stagiaire Scrum Master",
    category: "Développement",
    domain: "Application web médicale",
    location: "Stage",
    startDate: "2025-02",
    endDate: "2025-06",
    date: "Février 2025 — Juin 2025",
    duration: "5 mois",
    type: "Stage / Projet de fin d’études",
    icon: Layers,
    accent: "pink",
    description: [
      "Gestion Agile d’une équipe de quatre personnes dans le cadre du développement d’une application web médicale.",
      "Organisation et suivi des tâches de l’équipe tout au long du projet.",
      "Contribution à la coordination entre les membres et au suivi de l’avancement du développement.",
    ],
    technologies: ["Scrum", "Flask", "React", "GitHub", "Google Meet"],
  },
  {
    id: 5,
    company: "Sierra Bravo Intelligent",
    role: "Stagiaire développeuse Data & IA",
    category: "Data Science & IA",
    domain: "Football, IoT et vision par ordinateur",
    location: "Stage",
    startDate: "2025-01",
    endDate: "2025-06",
    date: "Janvier 2025 — Juin 2025",
    duration: "6 mois",
    type: "Stage",
    icon: Cpu,
    accent: "blue",
    description: [
      "Conception d’une plateforme d’analyse des performances individuelles et collectives des joueurs de football.",
      "Exploitation de l’intelligence artificielle et de la vision par ordinateur pour analyser les actions de jeu.",
      "Intégration de capteurs IoT et création de tableaux de bord pour visualiser les indicateurs de performance.",
    ],
    technologies: [
      "Python",
      "YOLO",
      "Roboflow",
      "Ultralytics",
      "Flask",
      "React",
      "Power BI",
      "Arduino",
      "MPU6050",
    ],
  },
  {
    id: 6,
    company: "Attijari Bank Tunisie",
    role: "Stagiaire Data Analyst",
    category: "Data & BI",
    domain: "Business Intelligence",
    location: "Siège — Tunisie",
    startDate: "2024-07",
    endDate: "2024-08",
    date: "Juillet 2024 — Août 2024",
    duration: "2 mois",
    type: "Stage",
    icon: Database,
    accent: "violet",
    description: [
      "Automatisation des processus d’extraction et de nettoyage des données bancaires.",
      "Préparation et transformation des données pour faciliter leur exploitation.",
      "Création de tableaux de bord analytiques afin d’identifier les anomalies et les tendances clés.",
    ],
    technologies: ["Talend", "MySQL", "Power BI", "ETL", "Data Visualization"],
  },
  {
    id: 7,
    company: "Efficience Dentaire",
    role: "Développement d’une plateforme Data & IA",
    category: "Data Science & IA",
    domain: "Santé, KPI et IA conversationnelle",
    location: "France",
    startDate: "2023-09",
    endDate: "2025-07",
    date: "Septembre 2023 — Juillet 2025",
    duration: "1 an et 11 mois",
    type: "Projet / Expérience",
    icon: Network,
    accent: "rose",
    description: [
      "Développement d’une plateforme d’analyse des performances destinée aux cabinets dentaires en France.",
      "Intégration d’un chatbot conversationnel basé sur l’IA et le traitement du langage naturel.",
      "Génération de rapports PDF et de recommandations personnalisées à partir des données analysées.",
    ],
    technologies: [
      "React.js",
      "Flask",
      "MongoDB Atlas",
      "JWT",
      "Gemini API",
      "NLP",
      "Puppeteer",
    ],
  },
];

const filters = [
  "Toutes",
  "Data & BI",
  "Data Engineering",
  "Data Science & IA",
  "Développement",
];

const getStartTimestamp = (date) => {
  const [year, month] = date.split("-").map(Number);
  return year * 12 + month;
};

export default function Experiences() {
  const [activeFilter, setActiveFilter] = useState("Toutes");
  const [expandedId, setExpandedId] = useState(null);

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort(
      (a, b) => getStartTimestamp(b.startDate) - getStartTimestamp(a.startDate)
    );
  }, []);

  const filteredExperiences = sortedExperiences.filter(
    (experience) =>
      activeFilter === "Toutes" || experience.category === activeFilter
  );

  const totalExperiences = experiences.length;
  const totalCategories = new Set(
    experiences.map((experience) => experience.category)
  ).size;

  return (
    <main className="experiences-page">
      <div className="experiences-background">
        <div className="experience-orb experience-orb-one" />
        <div className="experience-orb experience-orb-two" />
        <div className="experience-grid" />
      </div>

      <section className="experiences-hero">
        <motion.div
          className="experiences-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="experience-eyebrow">
            <Sparkles size={15} />
            <span>MON PARCOURS PROFESSIONNEL</span>
          </div>

          <h1>
            Mes <span>expériences</span>
            <br />
            professionnelles
          </h1>

          <p className="experiences-intro">
            Un parcours entre Data, Business Intelligence, développement web
            et intelligence artificielle, construit à travers mes expériences
            et mes projets.
          </p>

          <div className="experiences-hero-stats">
            <div className="experience-stat">
              <span className="experience-stat-number">
                {String(totalExperiences).padStart(2, "0")}
              </span>
              <span className="experience-stat-label">Expériences</span>
            </div>

            <div className="experience-stat-divider" />

            <div className="experience-stat">
              <span className="experience-stat-number">
                {String(totalCategories).padStart(2, "0")}
              </span>
              <span className="experience-stat-label">Domaines</span>
            </div>

            <div className="experience-stat-divider" />

            <div className="experience-stat">
              <span className="experience-stat-icon">
                <BrainCircuit size={23} />
              </span>
              <span className="experience-stat-label">Data & IA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="experiences-hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="experience-visual-ring experience-ring-outer" />
          <div className="experience-visual-ring experience-ring-inner" />

          <div className="experience-visual-center">
            <Briefcase size={42} strokeWidth={1.3} />
            <span>MY JOURNEY</span>
          </div>

          <div className="experience-floating-icon floating-icon-one">
            <Database size={21} />
          </div>
          <div className="experience-floating-icon floating-icon-two">
            <BrainCircuit size={21} />
          </div>
          <div className="experience-floating-icon floating-icon-three">
            <BarChart3 size={21} />
          </div>
          <div className="experience-floating-icon floating-icon-four">
            <Code2 size={21} />
          </div>
        </motion.div>
      </section>

      <section className="experiences-content-section">
        <div className="experiences-section-heading">
          <div>
            <span className="experiences-section-kicker">TIMELINE</span>
            <h2>Mon parcours en détail</h2>
            <p>Les expériences sont classées de la plus récente à la plus ancienne.</p>
          </div>

          <div className="experiences-count">
            <span>{String(filteredExperiences.length).padStart(2, "0")}</span>
            <span>éléments</span>
          </div>
        </div>

        <div className="experiences-filters" aria-label="Filtrer les expériences">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`experience-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setExpandedId(null);
              }}
            >
              {filter === "Toutes" && <Layers size={15} />}
              {filter === "Data & BI" && <BarChart3 size={15} />}
              {filter === "Data Engineering" && <Database size={15} />}
              {filter === "Data Science & IA" && <BrainCircuit size={15} />}
              {filter === "Développement" && <Code2 size={15} />}
              {filter}
            </button>
          ))}
        </div>

        <div className="experiences-timeline">
          <div className="experiences-timeline-line" />

          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((experience, index) => {
              const Icon = experience.icon;
              const isExpanded = expandedId === experience.id;

              return (
                <motion.article
                  className={`experience-card accent-${experience.accent}`}
                  key={experience.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: index * 0.045 }}
                >
                  <div className="experience-timeline-marker">
                    <span />
                  </div>

                  <div className="experience-card-inner">
                    <div className="experience-card-topline">
                      <span className="experience-category">
                        <Icon size={14} />
                        {experience.category}
                      </span>

                      <span className="experience-type">
                        {experience.type}
                      </span>
                    </div>

                    <div className="experience-card-header">
                      <div className="experience-company-icon">
                        <Icon size={25} strokeWidth={1.7} />
                      </div>

                      <div className="experience-heading-text">
                        <h3>{experience.role}</h3>
                        <p className="experience-company">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <div className="experience-meta">
                      <span>
                        <CalendarDays size={15} />
                        {experience.date}
                      </span>

                      <span className="experience-duration">
                        <Clock3 size={15} />
                        {experience.duration}
                      </span>

                      <span>
                        <MapPin size={15} />
                        {experience.location}
                      </span>
                    </div>

                    <div className="experience-domain">
                      <span className="experience-domain-dot" />
                      {experience.domain}
                    </div>

                    <button
                      type="button"
                      className="experience-details-toggle"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedId(isExpanded ? null : experience.id)
                      }
                    >
                      <span>
                        {isExpanded
                          ? "Masquer les détails"
                          : "Découvrir les missions"}
                      </span>
                      <ChevronDown
                        size={17}
                        className={isExpanded ? "chevron-open" : ""}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          className="experience-details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4>
                            <CheckCircle2 size={16} />
                            Missions et réalisations
                          </h4>

                          <ul className="experience-description-list">
                            {experience.description.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>

                          <h4 className="experience-tech-heading">
                            <Code2 size={16} />
                            Technologies utilisées
                          </h4>

                          <div className="experience-technologies">
                            {experience.technologies.map((technology) => (
                              <span key={technology}>{technology}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredExperiences.length === 0 && (
          <div className="experiences-empty">
            <Database size={30} />
            <p>Aucune expérience dans cette catégorie pour le moment.</p>
          </div>
        )}
      </section>

      <section className="experiences-cta">
        <div className="experiences-cta-glow" />
        <div className="experiences-cta-content">
          <span className="experiences-section-kicker">ET ENSUITE ?</span>
          <h2>Découvrons mes projets</h2>
          <p>
            Explorez les projets qui illustrent mes compétences en Data,
            Business Intelligence et intelligence artificielle.
          </p>
          <Link to="/projets" className="experiences-cta-button">
            Voir mes projets
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
