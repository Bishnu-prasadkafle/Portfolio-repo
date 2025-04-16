import React from "react";

function Footer() {
  return (
    <footer className='bg-black text-green-400 py-6 mt-8'>
      <div className='max-w-screen-xl mx-auto text-center'>
        <p className='text-2xl text-white'>
          &copy;2025 Bipin kafle. All right reserved.{" "}
        </p>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://www.linkedin.com/in/bishnukafle/'
            target=''
            rel=''
            className='hover:text-gray-400'>
            linkdin
          </a>
          <a href='#' target='' rel='' className='hover:text-gray-400'>
            facebook
          </a>
          <a href='#' target='' rel='' className='hover:text-gray-400'>
            Instagram
          </a>
          <a href='#' target='' rel='' className='hover:text-gray-400'>
            github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
