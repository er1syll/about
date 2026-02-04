const blogPosts = [
  {
    id: "react-map-keys",
    title: "Understanding map() and keys in React",
    date: "2024-03-10",
    content: [
      "When I first started using React, rendering lists with map() was confusing for me.",
      "I learned that map() is used to turn arrays into JSX elements.",
      "Keys help React track changes efficiently.",
      "Now I always use stable keys like id values.",
    ],
  },
  {
    id: "jsx-not-html",
    title: "Why JSX is not the same as HTML",
    date: "2024-03-14",
    content: [
      "JSX looks like HTML, but behaves differently.",
      "className instead of class.",
      "JS expressions go inside {}.",
      "JSX must return a single parent element.",
    ],
  },
  {
    id: "css-centering",
    title: "How I finally understood centering in CSS",
    date: "2024-03-18",
    content: [
      "Centering was frustrating.",
      "text-align doesn’t center block elements.",
      "Flexbox solved everything.",
    ],
  },
  {
    id: "first-api-project",
    title: "What I learned from my first API-based React project",
    date: "2024-03-22",
    content: [
      "Fetched API data.",
      "Handled loading and errors.",
      "Learned real app behavior.",
    ],
  },
];

export default function Home() {
  return (
    <div className="skills-card">
      {blogPosts.map((s) => (
        <div key={s.id}>
          <h3>{s.title}</h3>
          <ul>
            {s.content.map((content, index) => (
              <li key={index} className="skills-list">
                {content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
