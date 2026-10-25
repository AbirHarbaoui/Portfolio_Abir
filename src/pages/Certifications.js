import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  Cloud,
  Database,
  ExternalLink,
  GraduationCap,
  Network,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Certifications.css";

const certifications = [
  {
    id: "pl-300",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    shortTitle: "PL-300",
    organization: "Microsoft",
    category: "Business Intelligence",
    icon: ChartNoAxesCombined,
    accent: "gold",
    status: "Expirée",
    date: "Juin 2025",
    expiration: "Juin 2026",
    description:
      "Certification portant sur la préparation, la modélisation, la visualisation et l’analyse des données avec Microsoft Power BI.",
    skills: [
      "Microsoft Power BI",
      "Modélisation de données",
      "Visualisation",
      "DAX",
      "Power Query",
    ],
    link: "https://learn.microsoft.com/api/credentials/share/fr-fr/AbirHarbaoui-0000/PL-300", // ← remplacez par votre vrai lien
    linkLabel: "Afficher le diplôme",
    credential: "PL-300-XXXXXX", // ← remplacez par votre identifiant réel
  },
  {
    id: "ai-900",
    title: "Microsoft Certified: Azure AI Fundamentals",
    shortTitle: "AI-900",
    organization: "Microsoft",
    category: "Intelligence artificielle",
    icon: BrainCircuit,
    accent: "violet",
    status: "Expirée",
    date: "Mars 2025",
    expiration: "Mars 2026",
    description:
      "Certification portant sur les concepts fondamentaux de l’intelligence artificielle et les services IA proposés par Microsoft Azure.",
    skills: ["Microsoft Azure AI", "Machine Learning", "Deep Learning"],
    link: null,
    linkLabel: null,
    credential: null,
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals",
    shortTitle: "AZ-900",
    organization: "Microsoft",
    category: "Cloud computing",
    icon: Cloud,
    accent: "rose",
    status: "Expirée",
    date: "Janvier 2025",
    expiration: "Janvier 2026",
    description:
      "Certification sur les fondamentaux du cloud, les principaux services Azure, la sécurité, la conformité et les modèles de tarification.",
    skills: ["Microsoft Azure", "Cloud computing", "Sécurité du cloud"],
    link:
      "https://www.credly.com/badges/2d6c5f7a-d2ed-4d51-bbf8-fd778d7d4bb9/linked_in_profile",
    linkLabel: "Afficher le diplôme",
    credential: null,
  },
  {
    id: "power-bi",
    title: "Power BI",
    shortTitle: "Power BI",
    organization: "365 Data Science",
    category: "Business Intelligence",
    icon: ChartNoAxesCombined,
    accent: "gold",
    status: "Obtenue",
    date: "Novembre 2024",
    expiration: null,
    description:
      "Attestation de formation en Power BI, en lien avec la création de rapports, la visualisation des données et l’analyse décisionnelle.",
    skills: [
      "Microsoft Power BI",
      "Visualisation des données",
      "Business Intelligence",
    ],
    link: "https://learn.365datascience.com/certificates/CC-604502B43E/",
    linkLabel: "Afficher le diplôme",
    credential: "CC-604502B43E",
  },
  {
    id: "ccna-2",
    title: "Cisco Certified Network Associate (CCNA) 2",
    shortTitle: "CCNA 2",
    organization: "iTeam University",
    category: "Réseaux informatiques",
    icon: Network,
    accent: "blue",
    status: "Obtenue",
    date: "Juillet 2024",
    expiration: null,
    description:
      "Attestation délivrée par iTeam University dans le cadre du parcours de formation CCNA 2 en réseaux informatiques.",
    skills: ["Réseaux informatiques", "Cisco", "Administration réseau"],
    link: null,
    linkLabel: null,
    credential: null,
  },
  {
    id: "ccna-1",
    title: "Cisco Certified Network Associate (CCNA) 1",
    shortTitle: "CCNA 1",
    organization: "iTeam University",
    category: "Réseaux informatiques",
    icon: Network,
    accent: "blue",
    status: "Obtenue",
    date: "Juillet 2024",
    expiration: null,
    description:
      "Attestation délivrée par iTeam University pour le premier niveau du parcours CCNA en réseaux informatiques.",
    skills: ["Fondamentaux des réseaux", "Cisco", "Adressage IP"],
    link: null,
    linkLabel: null,
    credential: null,
  },
];

const learningAreas = [
  {
    icon: Cloud,
    title: "Cloud & Azure",
    description:
      "Compréhension des fondamentaux du cloud et des services de Microsoft Azure.",
  },
  {
    icon: Database,
    title: "Data & Business Intelligence",
    description:
      "Développement des compétences en analyse, visualisation et exploitation des données.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence artificielle",
    description:
      "Apprentissage continu des concepts IA et des services d’intelligence artificielle.",
  },
];

function Certifications() {
  return (
    <main className="certifications-page">
      <div className="certifications-background-grid" aria-hidden="true" />
      <div
        className="certifications-orb certifications-orb-one"
        aria-hidden="true"
      />
      <div
        className="certifications-orb certifications-orb-two"
        aria-hidden="true"
      />

      {/* HERO */}
      <section className="certifications-hero">
        <motion.div
          className="certifications-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="certifications-eyebrow">
            <Sparkles size={16} />
            MON PARCOURS DE CERTIFICATION
          </span>

          <h1>
            Certifications
            <br />
            <span>&amp; Attestations</span>
          </h1>

          <p className="certifications-hero-description">
            Des certifications Microsoft aux attestations en Business
            Intelligence et en réseaux, chaque étape enrichit mon parcours
            d’ingénieure informatique et renforce mes compétences techniques.
          </p>

          <div className="certifications-hero-stats">
            <div className="certifications-stat">
              <span className="certifications-stat-number">06</span>
              <span className="certifications-stat-label">
                Certifications et attestations
              </span>
            </div>

            <div className="certifications-stat-divider" />

            <div className="certifications-stat">
              <span className="certifications-stat-number">03</span>
              <span className="certifications-stat-label">
                Domaines technologiques clés
              </span>
            </div>
          </div>

          <a className="certifications-hero-link" href="#mes-certifications">
            Découvrir mes certifications
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        <motion.div
          className="certifications-hero-visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="certifications-visual-ring ring-one" />
          <div className="certifications-visual-ring ring-two" />
          <div className="certifications-visual-ring ring-three" />

          <div className="certifications-visual-center">
            <Award size={60} strokeWidth={1.3} />
            <span>CERTIFIED</span>
            <strong>AH</strong>
          </div>

          <span className="certifications-floating-icon floating-one">
            <Cloud size={23} />
          </span>
          <span className="certifications-floating-icon floating-two">
            <Database size={23} />
          </span>
          <span className="certifications-floating-icon floating-three">
            <ShieldCheck size={23} />
          </span>
        </motion.div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications-list-section" id="mes-certifications">
        <motion.div
          className="certifications-section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="certifications-section-kicker">
            MES ACCOMPLISSEMENTS
          </span>

          <h2>
            Mes certifications <span>techniques</span>
          </h2>

          <p>
            Retrouvez les certifications et attestations présentées sur mon
            profil professionnel, avec les dates et les liens de vérification
            disponibles.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;
            const isExpired = certification.status === "Expirée";

            return (
              <motion.article
                className={`certification-card accent-${certification.accent}`}
                key={certification.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 2) * 0.1,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="certification-card-top">
                  <div className="certification-icon-wrap">
                    <Icon size={30} strokeWidth={1.6} />
                  </div>

                  <span
                    className={`certification-status ${
                      isExpired
                        ? "certification-status-expired"
                        : "certification-status-obtained"
                    }`}
                  >
                    {isExpired ? (
                      <CalendarDays size={14} />
                    ) : (
                      <BadgeCheck size={15} />
                    )}
                    {certification.status}
                  </span>
                </div>

                <span className="certification-category">
                  {certification.category}
                </span>

                <h3>{certification.title}</h3>

                <div className="certification-organization">
                  <span className="certification-organization-mark">
                    {certification.organization === "Microsoft"
                      ? "M"
                      : certification.organization === "365 Data Science"
                        ? "365"
                        : "iT"}
                  </span>
                  <span>{certification.organization}</span>
                </div>

                <p className="certification-description">
                  {certification.description}
                </p>

                <div className="certification-dates">
                  <div className="certification-date-row">
                    <CalendarDays size={15} />
                    <span>Émise : {certification.date}</span>
                  </div>

                  {certification.expiration && (
                    <div className="certification-date-row certification-expiration">
                      <CalendarDays size={15} />
                      <span>Expirée : {certification.expiration}</span>
                    </div>
                  )}
                </div>

                <div className="certification-skills">
                  {certification.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {certification.credential && (
                  <div className="certification-credential">
                    <span>Identifiant du diplôme</span>
                    <strong>{certification.credential}</strong>
                  </div>
                )}

                <div className="certification-card-footer">
                  <span className="certification-short-title">
                    {certification.shortTitle}
                  </span>

                  {certification.link ? (
                    <a
                      className="certification-view-link"
                      href={certification.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {certification.linkLabel}
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="certification-no-link">
                      <CheckCircle2 size={15} />
                      {isExpired
                        ? "Certification obtenue"
                        : "Attestation obtenue"}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* DOMAINES */}
      <section className="certifications-learning-section">
        <div className="certifications-section-heading">
          <span className="certifications-section-kicker">
            MES DOMAINES D’APPRENTISSAGE
          </span>
          <h2>
            Toujours <span>progresser</span>
          </h2>
          <p>
            Je complète mes acquis par la pratique, les projets personnels et
            l’apprentissage continu des nouvelles technologies.
          </p>
        </div>

        <div className="certifications-learning-grid">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                className="certifications-learning-card"
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="certifications-learning-icon">
                  <Icon size={24} />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="certifications-cta">
        <div className="certifications-cta-icon">
          <GraduationCap size={34} />
        </div>

        <div className="certifications-cta-content">
          <span>LA SUITE DE MON PARCOURS</span>
          <h2>Apprendre, pratiquer, progresser.</h2>
          <p>
            Découvrez les compétences que je mobilise et les projets dans
            lesquels je les mets en pratique.
          </p>
        </div>

        <div className="certifications-cta-actions">
          <Link to="/competences" className="certifications-cta-primary">
            Mes compétences
            <ExternalLink size={16} />
          </Link>

          <Link to="/projets" className="certifications-cta-secondary">
            <Database size={16} />
            Mes projets
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Certifications;