
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  CalendarDays,
  Sparkles,
  MapPin,
  BookOpen,
  Database,
  BrainCircuit,
  Code2,
} from "lucide-react";
import "./Parcours.css";

const formations = [
  {
    periode: "2023 — 2025",
    type: "Cycle ingénieur",
    titre: "Ingénieure en Informatique",
    etablissement: "iTeam University",
    domaine: "Business Intelligence & Big Data",
    description:
      "Spécialisation en Business Intelligence, Big Data, ingénierie des données et intelligence artificielle. Développement de compétences en analyse, traitement et valorisation des données.",
    resultat: "17,5/20 · Très Bien",
    detail: "Majeure de promotion 2025 · Félicitations du jury",
    icon: Database,
    featured: true,
  },
  {
    periode: "2022 — 2023",
    type: "Master de recherche",
    titre: "Sciences Informatiques",
    etablissement: "Faculté des Sciences de Bizerte",
    domaine: "Informatique",
    description:
      "Approfondissement des connaissances en informatique, analyse de problèmes et démarche de recherche.",
    resultat: "Assez Bien",
    detail: "2ᵉ place de la promotion",
    icon: BrainCircuit,
  },
  {
    periode: "2019 — 2022",
    type: "Licence",
    titre: "Génie Logiciel et Systèmes d’Information",
    etablissement: "Faculté des Sciences de Bizerte",
    domaine: "Développement logiciel et systèmes d’information",
    description:
      "Acquisition des fondamentaux de la programmation, du développement logiciel, des bases de données et de la conception des systèmes d’information.",
    resultat: "Licence obtenue",
    detail: "Formation universitaire en informatique",
    icon: Code2,
  },
  {
    periode: "2019",
    type: "Baccalauréat",
    titre: "Baccalauréat Informatique",
    etablissement: "Tunisie",
    domaine: "Informatique",
    description:
      "Première étape de mon parcours académique et début de mon orientation vers les métiers de l’informatique.",
    resultat: "Assez Bien",
    detail: "Baccalauréat obtenu en 2019",
    icon: BookOpen,
  },
];

export default function Parcours() {
  return (
    <main className="parcours-page">
      <section className="parcours-hero">
        <div className="parcours-orb parcours-orb-one" />
        <div className="parcours-orb parcours-orb-two" />
        <div className="parcours-grid-background" />

        <motion.div
          className="parcours-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="parcours-eyebrow">
            <Sparkles size={15} />
            MON PARCOURS ACADÉMIQUE
          </span>

          <h1>
            Mon parcours
            <br />
            <span>de formation</span>
          </h1>

          <p>
            Chaque étape de ma formation m’a permis de construire
            mon expertise en informatique et de me spécialiser
            progressivement en Data, Business Intelligence et Big Data.
          </p>

          <a href="#formations" className="parcours-primary-button">
            Découvrir mes formations
            <GraduationCap size={18} />
          </a>

          <div className="parcours-location">
            <MapPin size={15} />
            Tunis, Tunisie
          </div>
        </motion.div>

        <motion.div
          className="parcours-hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="parcours-visual-ring parcours-ring-outer" />
          <div className="parcours-visual-ring parcours-ring-inner" />

          <div className="parcours-visual-center">
            <GraduationCap size={65} strokeWidth={1.2} />
            <span>LEARNING</span>
            <strong>EVOLVING</strong>
          </div>

          <div className="parcours-floating-card parcours-float-top">
            <Award size={20} />
            <div>
              <strong>17,5 / 20</strong>
              <span>Cycle ingénieur</span>
            </div>
          </div>

          <div className="parcours-floating-card parcours-float-bottom">
            <Sparkles size={19} />
            <div>
              <strong>Promotion 2025</strong>
              <span>Majeure de promotion</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="parcours-stats">
        <div className="parcours-stat">
          <strong>4</strong>
          <span>Étapes de formation</span>
        </div>

        <div className="parcours-stat">
          <strong>17,5/20</strong>
          <span>Résultat au cycle ingénieur</span>
        </div>

        <div className="parcours-stat">
          <strong>2025</strong>
          <span>Diplôme d’ingénieure</span>
        </div>

        <div className="parcours-stat">
          <strong>2ᵉ</strong>
          <span>Place en Master</span>
        </div>
      </section>

      <section className="parcours-section" id="formations">
        <div className="parcours-section-heading">
          <span className="parcours-eyebrow">
            <GraduationCap size={16} />
            ÉDUCATION
          </span>

          <h2>
            Les étapes de ma <span>formation</span>
          </h2>

          <p>
            De mes premières études en informatique à mon diplôme
            d’ingénieure, découvre les étapes qui ont construit mon profil.
          </p>
        </div>

        <div className="parcours-timeline">
          {formations.map((formation, index) => {
            const Icon = formation.icon;

            return (
              <motion.article
                className={`parcours-timeline-item ${
                  formation.featured ? "parcours-featured" : ""
                }`}
                key={formation.titre}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 2) * 0.08,
                }}
              >
                <div className="parcours-timeline-marker">
                  <Icon size={19} />
                </div>

                <div className="parcours-timeline-card">
                  <div className="parcours-card-top">
                    <span className="parcours-period">
                      <CalendarDays size={14} />
                      {formation.periode}
                    </span>

                    {formation.featured && (
                      <span className="parcours-highlight-label">
                        <Sparkles size={12} />
                        Parcours d’excellence
                      </span>
                    )}
                  </div>

                  <span className="parcours-item-type">
                    {formation.type}
                  </span>

                  <h3>{formation.titre}</h3>
                  <h4>{formation.etablissement}</h4>

                  <p className="parcours-domain">
                    {formation.domaine}
                  </p>

                  <p className="parcours-item-description">
                    {formation.description}
                  </p>

                  <div className="parcours-result">
                    <Award size={18} />

                    <div>
                      <strong>{formation.resultat}</strong>
                      <span>{formation.detail}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
