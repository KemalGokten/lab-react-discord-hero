// src/App.jsx
import "./App.css";

import backgroundLogo from "./assets/images/discord-background.png";
import discordLogo from "./assets/images/discord-logo-white.png";
import menuIcon from "./assets/images/menu-icon.png";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <img
          id="discord-logo"
          className="header-logo"
          src={discordLogo}
          alt="discordLogo"
        />
        <img className="header-logo" src={menuIcon} alt="menuIcon" />
      </nav>

      <header>
        <h1 className="headings">IMAGINE A PLACE...</h1>
        <p className="paragraph">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <a className="download-btn" href="">
          Download for Mac
        </a>
        <a className="open-browser-btn" href="">
          Open Discord in your browser
        </a>
      </header>
    </div>
  );
}

export default App;
