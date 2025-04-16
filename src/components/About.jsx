import React from "react";

function About({ details, image }) {
  return (
    //p-6 = padding on all sides 6*4 =24px
    // text-xl = extra large mt-2= margin-top(8px)
    <section className='p-6 text-center bg-gray-400 text-black bg-gradient-to-l from-gray-600 to to-white'>
      <img
        src={image}
        alt='profile'
        className='w-55 h-52 rounded-full mx-auto mb-4 border-4 border-white'
      />
      <h2 className='text-xl text-black font-extrabold  '>About Me</h2>

      <p className='mt-2 font-semibold text-shadow-orange-50'>{details}.</p>
    </section>
  );
}

export default About;
