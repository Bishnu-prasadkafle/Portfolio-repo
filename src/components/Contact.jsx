import React from "react";

function Contact() {
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };
  return (
    <section className='p-5 max-w-160 mx-auto bg-gray-600 rounded-2xl'>
      <h2 className='text-xl font-semibold text-center mb-4 bg-white text-black rounded-2xl max-h-9  '>
        Contact Me
      </h2>
      <form
        onSubmit={handlesubmit}
        className='bg-white -300 p-6 rounded-lg shadow-md space-y-4'>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full p-2 border-gray-400 rounded border-b-black'
        />
        <input
          type='email'
          placeholder='Your email'
          className='w-full p-2 border-gray-400 rounded'
        />
        <input
          type='Address'
          placeholder='Address'
          className='w-full p-2 border-gray-400 rounded'
        />
        <textarea
          name=''
          id=''
          placeholder='Your Message'
          required
          className='w-full p-2 border-gray-400 rounded'></textarea>
        <button
          type='submit'
          className='bg-green-600 text-white px-4 rounded hover:bg-orange-800 transition '>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
