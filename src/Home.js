const blogPosts = [
  {
    id: "react-map-keys",
    title: "Understanding map() and keys in React",
    date: "2024-03-10",
    content: [
      "When I first started using React, rendering lists with map() was confusing for me.",
      "I learned that map() is used to turn arrays into JSX elements. Every element returned by map() must have a unique key so React can track changes efficiently.",
      "At first, I forgot to add keys, which caused warnings in the console. Later I understood that keys help React update the UI without re-rendering everything.",
      "Now I always use stable keys like id values instead of array indexes when possible.",
    ],
  },

  {
    id: "jsx-not-html",
    title: "Why JSX is not the same as HTML",
    date: "2024-03-14",
    content: [
      "JSX looks like HTML, but it behaves very differently.",
      "One mistake I made was using class instead of className and forgetting that JavaScript expressions must be written inside curly braces.",
      "I also learned that JSX must return a single parent element, which helped me understand why fragments and wrapper divs are needed.",
      "Understanding JSX as JavaScript first, not HTML, made React much easier to learn.",
    ],
  },

  {
    id: "css-centering",
    title: "How I finally understood centering in CSS",
    date: "2024-03-18",
    content: [
      "Centering elements in CSS was one of the most frustrating parts of learning front-end development.",
      "At first, I tried using text-align for everything, which does not work for block elements like images.",
      "I learned that Flexbox is the most reliable way to center elements both horizontally and vertically.",
      "Using display: flex with justify-content and align-items helped me build cleaner and more predictable layouts.",
    ],
  },

  {
    id: "first-api-project",
    title: "What I learned from my first API-based React project",
    date: "2024-03-22",
    content: [
      "My first API-based project was a React app using the One Piece public API.",
      "I learned how to fetch data, store it in state, and render it dynamically using JSX.",
      "Handling loading states and errors taught me how real applications behave in different situations.",
      "This project helped me understand how React works with real data instead of static content.",
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
              <li key="index" className="skills-list">
                {content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Sweets() {}
