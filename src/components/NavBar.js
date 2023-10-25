import React from "react";


function NavBar() {
  const links = ["home ", "about ", "projects "];
  return <nav><a key="home">{links[0]}</a> 
  <a key="about">{links[1]}</a>
  <a key="projects">{links[2]}</a>
  </nav>;
}

export default NavBar;
