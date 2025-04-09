import React from "react";

function ProjectItem({ name, about, technologies }) {
  const listTechnologies = technologies.map((technology, index) => (
    <span key={index}>{technology}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {listTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
