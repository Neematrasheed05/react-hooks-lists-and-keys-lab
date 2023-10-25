import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technology}) {
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">

        <span></span>
      </div>
    </div>
  );
}

export default ProjectItem;
