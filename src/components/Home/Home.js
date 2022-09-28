import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Disney Characters</h1>
      <ul className="all-cards">
        <li>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/d/d4/Mickey_Mouse.png"
              alt="Mickey Mouse"
            />
          </a>
          <span>Mickey Mouse</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/d/d4/Mickey_Mouse.png"
              alt="Mickey Mouse"
            />
          </a>
          <span>Mickey Mouse</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/d/d4/Mickey_Mouse.png"
              alt="Mickey Mouse"
            />
          </a>
          <span>Mickey Mouse</span>
        </li>
      </ul>
    </div>
  );
}

export default Home;
