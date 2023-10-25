import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({projects}) {
  const projectElements = projects.map(prObj => (
    <div key={prObj.id}>
      
      <h3>{prObj.name}</h3>
      <p>{prObj.about}</p>
      <p>{prObj.technologies}</p>
      
    </div>
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
