import React from "react";
import ProjectCard from "./ProjectCard";
import radiantImg from "../assets/radiant.png";
import redrooftImg from "../assets/redroof1.png";
import profileImg from "../assets/logo.png";

function Projects() {
  const projectData = [
    {
      image: profileImg,
      title: "Portfolio Websites",
      description: "portfolio websites with beautiful UIs",
      link: "https://bishnuprasadkafle.com.np/",
    },
    {
      image: radiantImg,
      title: "Radiant Memories Photography",
      description: "Photrography team websites with gallery and admin panel",
      link: "https://radiantmemories.com",
    },
    {
      image: redrooftImg,
      title: "Hotel Redroof",
      description: "websites with booking system ",
      link: "https://github.com/bishnukafle/redroof-hotel",
    },
  ];
  return (
    <section className='p-6'>
      <h2 className='text-2xl font-semibold text-center mb-4'>My Projects</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
