
import { useState } from "react";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Sparkles,
  Code2,
  Globe,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext";
import "./Contact.css";

const EMAIL = "abirharbaoui65@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/abir-harbaoui-911192224/";
const GITHUB = "https://github.com/AbirHarbaoui";
const KAGGLE = "https://www.kaggle.com/abirharbaoui";

export default function Contact() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFormError(
        isEnglish
          ? "Please fill in all fields."
          : "Veuillez remplir tous les champs."
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setFormError(
        isEnglish
          ? "Please enter a valid email address."
          : "Veuillez saisir une adresse e-mail valide."
      );
      return;
    }

    const subject = encodeURIComponent(
      `${
        isEnglish ? "Portfolio contact" : "Contact depuis le portfolio"
      } — ${name}`
    );

    const body = encodeURIComponent(
      `${isEnglish ? "Name" : "Nom"}: ${name}\n` +
        `E-mail: ${email}\n\n` +
        `${isEnglish ? "Message" : "Message"}:\n${message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <div className="contact-background" aria-hidden="true">
        <span className="contact-glow contact-glow-one" />
        <span className="contact-glow contact-glow-two" />
        <span className="contact-grid" />
      </div>

      <div className="contact-container">
        {/* INTRODUCTION */}
        <header className="contact-intro">
          <div className="contact-eyebrow">
            <span>06</span>
            <span className="contact-eyebrow-line" />
            <span>CONTACT</span>
          </div>

          <h1>
            {isEnglish ? "Let's get " : "Restons en "}
            <span>{isEnglish ? "in touch" : "contact"}</span>
          </h1>

          <p>
            {isEnglish
              ? "Have a question, a project idea or simply want to connect? Send me a message."
              : "Une question, une idée de projet ou simplement envie d’échanger ? Écrivez-moi, je vous réponds rapidement."}
          </p>

          <div className="contact-intro-actions">
            <a
              className="contact-button contact-button-primary"
              href={`mailto:${EMAIL}`}
            >
              <Mail size={18} />
              {isEnglish ? "Send me an email" : "M’écrire un e-mail"}
              <Send size={14} />
            </a>

            <a
              className="contact-button contact-button-secondary"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={18} />
              {isEnglish
                ? "Connect on LinkedIn"
                : "Me retrouver sur LinkedIn"}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </header>

        {/* CARTE DE PROFIL */}
        <section className="contact-profile-card">
          <div className="contact-profile-identity">
            <div className="contact-monogram" aria-label="Logo AH">
              <span>A</span>
              <span>H</span>
            </div>

            <h2>Abir Harbaoui</h2>

            <p className="contact-profile-role">
              {isEnglish
                ? "Data & Business Intelligence Engineer"
                : "Ingénieure Data & Business Intelligence"}
            </p>

            <span className="contact-mini-line" />

            <div className="contact-profile-note">
              <span className="contact-note-icon">
                <Sparkles size={17} />
              </span>
              <p>
                {isEnglish
                  ? "Turning data into insights and ideas into useful solutions."
                  : "Transformer les données en insights et les idées en solutions concrètes."}
              </p>
            </div>
          </div>

          <div className="contact-details">
            {/* E-MAIL */}
            <div className="contact-detail-row">
              <span className="contact-detail-icon">
                <Mail size={18} />
              </span>

              <div className="contact-detail-copy">
                <span className="contact-detail-label">E-MAIL</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>

              <button
                type="button"
                className="contact-copy-button"
                onClick={copyEmail}
                aria-label={
                  isEnglish ? "Copy email" : "Copier l’e-mail"
                }
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied
                  ? isEnglish
                    ? "Copied"
                    : "Copié"
                  : isEnglish
                    ? "Copy"
                    : "Copier"}
              </button>
            </div>

            {/* LOCALISATION */}
            <div className="contact-detail-row">
              <span className="contact-detail-icon">
                <MapPin size={18} />
              </span>

              <div className="contact-detail-copy">
                <span className="contact-detail-label">
                  {isEnglish ? "LOCATION" : "LOCALISATION"}
                </span>
                <p>{isEnglish ? "Tunis, Tunisia" : "Tunis, Tunisie"}</p>
              </div>
            </div>

            {/* LINKEDIN */}
            <a
              className="contact-detail-row contact-detail-link"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon">
                <FaLinkedinIn size={18} />
              </span>

              <div className="contact-detail-copy">
                <span className="contact-detail-label">LINKEDIN</span>
                <p>Abir Harbaoui</p>
              </div>

              <ArrowUpRight
                className="contact-detail-external"
                size={18}
              />
            </a>

            {/* GITHUB */}
            <a
              className="contact-detail-row contact-detail-link"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon">
                <Code2 size={18} />
              </span>

              <div className="contact-detail-copy">
                <span className="contact-detail-label">GITHUB</span>
                <p>github.com/AbirHarbaoui</p>
              </div>

              <ArrowUpRight
                className="contact-detail-external"
                size={18}
              />
            </a>

            {/* KAGGLE */}
            <a
              className="contact-detail-row contact-detail-link"
              href={KAGGLE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon">
                <Globe size={18} />
              </span>

              <div className="contact-detail-copy">
                <span className="contact-detail-label">KAGGLE</span>
                <p>kaggle.com/abirharbaoui</p>
              </div>

              <ArrowUpRight
                className="contact-detail-external"
                size={18}
              />
            </a>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section className="contact-form-card">
          <div className="contact-form-heading">
            <div>
              <span className="contact-form-eyebrow">
                {isEnglish ? "LET'S TALK" : "FORMULAIRE"}
              </span>

              <h2>
                {isEnglish
                  ? "Send me a message"
                  : "Envoyez-moi un message"}
              </h2>
            </div>

            <span className="contact-response-time">
              {isEnglish
                ? "Let's connect!"
                : "Au plaisir d’échanger."}
            </span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-fields">
              <label className="contact-field">
                <span>{isEnglish ? "NAME" : "NOM"}</span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={
                    isEnglish ? "Your name" : "Votre nom"
                  }
                  autoComplete="name"
                  required
                />
              </label>

              <label className="contact-field">
                <span>E-MAIL</span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={
                    isEnglish
                      ? "Your email address"
                      : "Votre adresse e-mail"
                  }
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label className="contact-field contact-message-field">
              <span>
                {isEnglish ? "YOUR MESSAGE" : "VOTRE MESSAGE"}
              </span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={
                  isEnglish
                    ? "Tell me about your project or opportunity..."
                    : "Parlez-moi de votre projet ou de votre opportunité..."
                }
                rows={5}
                required
              />
            </label>

            {formError && (
              <p className="contact-form-error" role="alert">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="contact-button contact-button-primary contact-submit"
            >
              {isEnglish ? "Prepare email" : "Envoyer"}
              <Send size={15} />
            </button>

            <p className="contact-form-disclaimer">
              {isEnglish
                ? "Your email application will open so you can review and send your message."
                : "Votre messagerie s’ouvrira pour vous permettre de vérifier et d’envoyer votre message."}
            </p>
          </form>
        </section>

        {/* PIED DE PAGE */}
        <footer className="contact-bottom-note">
          <span />
          <p>DATA · TECHNOLOGY · INNOVATION</p>
          <span />
        </footer>
      </div>
    </main>
  );
}
