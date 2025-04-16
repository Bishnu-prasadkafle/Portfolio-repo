import React from "react";

function ProjectCard({ image, title, description, link }) {
  return (
    <div className='bg-gray-600 rounded-lg shadow-md p-4 text:left hover:shadow-xl transition-shadow duration-300'>
      <img
        src={image}
        alt={title}
        className='mb-3 w-full h-70 object-cover rounded cursor-pointer'
      />
      <h3 className='text-lg font-bold text-white mb-2'>{title}</h3>
      <p className='text-white'>{description}</p>
      <a
        href={link}
        target='blank'
        rel=''
        className='text-green-600 hover:underline font-bold '>
        case study
      </a>
    </div>
  );
}

export default ProjectCard;
