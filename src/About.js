import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

const projectsData = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    tech: "HTML, CSS",
    points: [
      "Built a personal 'About Me' website using semantic HTML and CSS",
      "Structured content into bio, skills, and contacts sections",
      "Styled layout for readability and clean presentation",
    ],
    icon: project1,
  },
  {
    id: "onepiece",
    title: "One Piece API Web App",
    tech: "React, JavaScript (JSX), HTML, CSS",
    points: [
      "Fetched and displayed data from the One Piece public API",
      "Rendered dynamic content using JSX and map()",
      "Organized code using reusable React components",
    ],
    icon: project2,
  },
  {
    id: "text-analyzer",
    title: "Text Analyzer with DeepSeek API",
    tech: "React, JavaScript, HTML, CSS",
    points: [
      "Integrated DeepSeek API for text analysis",
      "Handled user input and API requests",
      "Displayed analysis results dynamically in the UI",
    ],
    icon: project3,
  },
];

export default function About() {
  return (
    <div className="skills-card">
      {projectsData.map((d) => (
        <div key={d.id}>
          <img src={d.icon} alt={d.title} className="picture-a" />
          <h3>{d.title}</h3>
          <ul>
            <li>Project built using {d.tech}</li>
            {d.points.map((points, index) => (
              <li key={index} className="skills-list">
                {points}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
