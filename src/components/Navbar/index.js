import React from "react";
import "./style.css";

function Navbar(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Clicky Game</a>
  <div>
  <ul className="navbar-nav">      
      <li className="nav-item">
          <span className="nav-item msg2">{props.message}</span>
      </li>
      <li className="nav-item"><span className="nav-item msg2">Score : <span className="msg1">{props.score}</span> | Top Score : <span className="msg1">{props.highscore}</span></span></li>
  </ul>
</div>
</nav>);
}

export default Navbar;
