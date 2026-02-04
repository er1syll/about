import emailIcon from "./assets/email.png";
import github from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import myIcon from "./assets/picture.png";

const skillsData = [
  {
    id: "frontend",
    title: "Front-end",
    items: [
      "HTML, CSS, JavaScript (ES6+)",
      "React, React Router",
      "Responsive layout, basic UI/UX principles",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Browser DevTools"],
  },
  {
    id: "learning",
    title: "Learning / Improving",
    items: [
      "Component-based architecture",
      "State management basics",
      "Clean and readable code",
    ],
  },
];

const contacts = [
  {
    id: "email",
    label: "Email",
    href: "mailto:bolaterasyl085@email.com",
    icon: emailIcon,
  },
  {
    id: "github",
    label: "  Github",
    href: "https://github.com/er1syll",
    icon: github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/ерасыл-болат-570457397",
    icon: linkedinIcon,
  },
];

export default function Contact() {
  return (
    <div className="cont-p">
      <img src={myIcon} alt="My icon" className="icon" />
      <div className="skills-card">
        {skillsData.map((section) => (
          <section key={section.id}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, index) => (
                <li key={index} className="skills-list">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <h4>Contacts</h4>
      <div className="contact-icons">
        {contacts.map((c) => (
          <a
            key={c.id}
            href={c.href}
            target={c.id === "email" ? undefined : "_blank"}
            rel={c.id === "email" ? undefined : "noreferrer"}
            className="contact-icon"
            aria-label={c.label}
            title={c.label}
          >
            <img src={c.icon} alt={c.label} />
          </a>
        ))}
      </div>
    </div>
  );
}
