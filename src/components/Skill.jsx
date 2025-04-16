import React from "react";

function Skill() {
  const skills = [
    {
      HTML: "75%",
      CSS: "70%",
      Javascript: "60%",
      Figma: "60%",
      Bootstrap: "75%",
      AdobePhotoshop: "50%",
    },
  ];
  return (
    <section className='bg-gray-600 my-6  '>
      <div className='text-white  text-center text-2xl '>
        My Skills
        {skills.map((skill) => (
          <h1 key={skill.id}>
            <p className='text-black bg-amber-100 max-w-screen text-center'>
              HTML:{skill.HTML}
            </p>
            <p>CSS:{skill.CSS}</p>
            <p>JS:{skill.Javascript}</p>
            <p>Figma:{skill.Figma}</p>
            <p>Bootstrap:{skill.Bootstrap}</p>
            <p>Adobe photoshop:{skill.AdobePhotoshop}</p>
          </h1>
        ))}
      </div>
    </section>
  );
}

export default Skill;
