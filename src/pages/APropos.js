import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Database,
  BarChart3,
  Code2,
  GraduationCap,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  MapPin,
  Briefcase,
  Award,
  Users,
  BookOpen,
  Music,
  Camera,
  Compass,
  Languages as LanguagesIcon,
  TrendingUp,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./APropos.css";

/* =========================================================
   DONNÉES
========================================================= */

const expertise = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Conception de tableaux de bord, analyse des KPI et transformation des données en indicateurs utiles à la décision.",
    tags: ["Power BI", "DAX", "Power Query"],
  },
  {
    icon: Database,
    title: "Data Engineering & Big Data",
    description:
      "Préparation, transformation et structuration des données pour construire des flux de données fiables.",
    tags: ["SQL", "ETL", "Talend"],
  },
  {
    icon: BrainCircuit,
    title: "Data Science & IA",
    description:
      "Exploration des données, machine learning et développement de projets intégrant des modèles d'intelligence artificielle.",
    tags: ["Python", "Machine Learning", "LLM"],
  },
  {
    icon: Code2,
    title: "Développement informatique",
    description:
      "Développement d'applications web et intégration de fonctionnalités intelligentes dans des solutions concrètes.",
    tags: ["React", "Flask", "Java"],
  },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Esprit analytique",
    description:
      "Comprendre les besoins, explorer les données et identifier des solutions pertinentes.",
  },
  {
    icon: Target,
    title: "Orientation résultats",
    description:
      "Créer des solutions utiles, structurées et adaptées aux objectifs du projet.",
  },
  {
    icon: Rocket,
    title: "Apprentissage continu",
    description:
      "Explorer de nouvelles technologies en Data, BI et intelligence artificielle.",
  },
  {
    icon: Users,
    title: "Esprit d'équipe",
    description:
      "Collaborer efficacement, communiquer avec clarté et partager les connaissances.",
  },
  {
    icon: Award,
    title: "Rigueur & qualité",
    description:
      "Accorder de l'importance aux détails, à la fiabilité et à la documentation.",
  },
  {
    icon: Compass,
    title: "Curiosité",
    description:
      "S'intéresser aux tendances de la Data, de l'IA et aux nouveaux outils du marché.",
  },
];

const stats = [
  { value: "5+", label: "Projets Data & IA", icon: BarChart3 },
  { value: "3", label: "Expériences professionnelles", icon: Briefcase },
  { value: "20+", label: "Technologies maîtrisées", icon: Code2 },
  { value: "2", label: "Formations diplômantes", icon: GraduationCap },
];

const languages = [
  { name: "Arabe", level: "Langue maternelle", percentage: 100 },
  { name: "Français", level: "Courant", percentage: 90 },
  { name: "Anglais", level: "Professionnel", percentage: 60 },
];

const interests = [
  {
    icon: BookOpen,
    title: "Veille technologique",
    description:
      "Suivre les avancées en Data, IA et BI pour rester à jour sur les bonnes pratiques.",
  },
  {
    icon: Camera,
    title: "Photographie",
    description:
      "Capturer des moments et explorer le monde à travers un regard différent.",
  },
  {
    icon: Music,
    title: "Musique",
    description:
      "Accompagner les sessions de concentration et nourrir la créativité.",
  },
  {
    icon: Coffee,
    title: "Échanges & partage",
    description:
      "Discuter de projets, partager des idées et apprendre des autres.",
  },
];

/* =========================================================
   COMPOSANT
========================================================= */

const APropos = () => {
  return (
    <main className="about-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />

        <div className="about-container about-hero-grid">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-eyebrow">
              <Sparkles size={15} />
              <span>À PROPOS DE MOI</span>
            </div>

            <h1>
              Derrière les données,
              <br />
              <span>il y a une vision.</span>
            </h1>

            <p className="about-intro">
              Je suis <strong>Abir Harbaoui</strong>, ingénieure
              en informatique spécialisée en Business
              Intelligence et Big Data. Je m'intéresse à
              l'analyse des données, à la Data Science et à
              l'intelligence artificielle pour concevoir des
              solutions innovantes et utiles.
            </p>

            <div className="about-location">
              <MapPin size={16} />
              <span>Tunis, Tunisie</span>
              <span className="about-location-dot" />
              <span>Ouverte aux opportunités professionnelles</span>
            </div>

            <div className="about-hero-actions">
              <a
                href="/CV_Abir_Harbaoui.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-button about-button-primary"
              >
                Consulter mon CV
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/CV_Abir_Harbaoui.pdf"
                download="CV_Abir_Harbaoui.pdf"
                className="about-button about-button-secondary"
              >
                Télécharger le CV
                <ArrowDownToLine size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-visual"
            initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="about-photo-frame">
              <div className="about-photo-top">
                <span className="about-status-dot" />
                <span>PROFILE.EXE</span>
                <span className="about-photo-code">AH_01</span>
              </div>

              <div className="about-photo">
                <img
                  src="/abir.png"
                  alt="Portrait d'Abir Harbaoui"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.classList.add(
                      "about-photo-missing"
                    );
                  }}
                />

                <div className="about-photo-fallback">
                  <span>AH</span>
                  <p>ABIR HARBAOUI</p>
                  <small>DATA · BI · AI</small>
                </div>

                <div className="about-photo-overlay" />
              </div>

              <div className="about-photo-bottom">
                <span>DATA & BUSINESS INTELLIGENCE</span>
                <Sparkles size={16} />
              </div>
            </div>

            <div className="about-floating-card about-floating-top">
              <Database size={20} />
              <div>
                <strong>DATA</strong>
                <span>Comprendre</span>
              </div>
            </div>

            <div className="about-floating-card about-floating-bottom">
              <BrainCircuit size={21} />
              <div>
                <strong>ARTIFICIAL INTELLIGENCE</strong>
                <span>Innover</span>
              </div>
            </div>

            <div className="about-visual-ring" />
          </motion.div>
        </div>

        <a href="#about-story" className="about-scroll">
          <span>Découvrir mon univers</span>
          <ArrowDownToLine size={15} />
        </a>
      </section>

      {/* =====================================================
          STATS — CHIFFRES CLÉS
      ===================================================== */}
      <section className="about-stats-section">
        <div className="about-container">
          <div className="about-stats-grid">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="about-stat-card"
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="about-stat-icon">
                    <Icon size={22} />
                  </span>
                  <strong className="about-stat-value">{item.value}</strong>
                  <span className="about-stat-label">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MON HISTOIRE
      ===================================================== */}
      <section className="about-section" id="about-story">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">01 — MON PARCOURS</span>
            <h2>
              La technologie au service
              <br />
              <span>des idées.</span>
            </h2>
          </div>

          <div className="about-story-grid">
            <motion.div
              className="about-story-main"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-story-icon">
                <GraduationCap size={25} />
              </div>

              <h3>De la formation à la réalisation de projets</h3>

              <p>
                Mon parcours en informatique m'a permis de
                développer des compétences en développement
                logiciel, en gestion des données et en
                Business Intelligence. Ma spécialisation
                BI & Big Data m'a ensuite amenée à explorer
                la manière dont les données peuvent soutenir
                l'analyse et la prise de décision.
              </p>

              <p>
                À travers mes expériences et mes projets,
                j'ai travaillé sur des applications web,
                des tableaux de bord, des pipelines ETL et
                des solutions intégrant des techniques
                d'intelligence artificielle.
              </p>

              <p>
                Aujourd'hui, je souhaite continuer à évoluer
                dans les métiers de la Data, de la BI et de
                l'IA, en participant à des projets concrets
                où la technologie répond à de vrais besoins.
              </p>
            </motion.div>

            <motion.div
              className="about-story-side"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="about-quote-mark">"</div>

              <blockquote>
                Les données prennent toute leur valeur
                lorsqu'elles permettent de mieux comprendre,
                décider et innover.
              </blockquote>

              <div className="about-quote-author">
                <span className="about-quote-line" />
                <span>Ma vision de la Data</span>
              </div>

              <div className="about-mini-stats">
                <div>
                  <strong>BI</strong>
                  <span>Décision</span>
                </div>
                <div>
                  <strong>DATA</strong>
                  <span>Analyse</span>
                </div>
                <div>
                  <strong>IA</strong>
                  <span>Innovation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}
      <section className="about-section about-expertise-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">03 — MES DOMAINES</span>
            <h2>
              Un profil à la croisée
              <br />
              <span>de plusieurs expertises.</span>
            </h2>
            <p>
              Des compétences complémentaires pour analyser
              les données, construire des outils et explorer
              le potentiel de l'intelligence artificielle.
            </p>
          </div>

          <div className="about-expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="about-expertise-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="about-expertise-card-top">
                    <span className="about-expertise-icon">
                      <Icon size={23} />
                    </span>
                    <span className="about-expertise-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="about-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUALITÉS
      ===================================================== */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              05 — MA FAÇON DE TRAVAILLER
            </span>
            <h2>
              Au-delà du code,
              <br />
              <span>l'état d'esprit.</span>
            </h2>
          </div>

          <div className="about-strengths-grid">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="about-strength-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="about-strength-icon">
                    <Icon size={23} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LANGUES
      ===================================================== */}
      <section className="about-section about-languages-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              06 — COMMUNICATION
            </span>
            <h2>
              Les langues
              <br />
              <span>que je parle.</span>
            </h2>
            <p>
              Une communication fluide pour collaborer dans
              des contextes variés.
            </p>
          </div>

          <div className="about-languages-grid">
            {languages.map((lang, index) => (
              <motion.div
                className="about-language-card"
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="about-language-heading">
                  <span className="about-language-icon">
                    <LanguagesIcon size={20} />
                  </span>
                  <div>
                    <h3>{lang.name}</h3>
                    <p>{lang.level}</p>
                  </div>
                  <span className="about-language-percent">
                    {lang.percentage}%
                  </span>
                </div>

                <div className="about-language-bar">
                  <motion.span
                    className="about-language-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CENTRES D'INTÉRÊT
      ===================================================== */}
      <section className="about-section about-interests-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              07 — AU QUOTIDIEN
            </span>
            <h2>
              Ce qui m'inspire
              <br />
              <span>en dehors des données.</span>
            </h2>
            <p>
              Les passions et habitudes qui nourrissent ma
              créativité et mon équilibre.
            </p>
          </div>

          <div className="about-interests-grid">
            {interests.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="about-interest-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="about-interest-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA ENRICHI
      ===================================================== */}
      <section className="about-cta-section">
        <div className="about-container">
          <motion.div
            className="about-cta-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-cta-glow" />

            <div className="about-cta-content">
              <span className="about-section-label">
                ET MAINTENANT ?
              </span>

              <h2>
                Écrivons la suite
                <br />
                <span>ensemble.</span>
              </h2>

              <p>
                Je suis ouverte aux opportunités en Data
                Analytics, Business Intelligence, Data
                Engineering et intelligence artificielle.
                Découvrons comment nous pouvons collaborer.
              </p>

              <div className="about-cta-looking-for">
                <span className="about-cta-looking-label">
                  <TrendingUp size={14} />
                  Ce que je recherche
                </span>
                <div className="about-cta-looking-tags">
                  <span>CDI</span>
                  <span>Data Analyst</span>
                  <span>BI Engineer</span>
                  <span>Data Scientist</span>
                  <span>IA / ML</span>
                </div>
              </div>

              <div className="about-cta-actions">
                <Link
                  to="/contact"
                  className="about-button about-button-primary"
                >
                  Me contacter
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/experiences"
                  className="about-button about-button-secondary"
                >
                  Découvrir mes expériences
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="about-cta-symbol">
              <BrainCircuit size={78} strokeWidth={1} />
              <span>AH</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default APropos;