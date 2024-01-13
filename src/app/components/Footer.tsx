import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";


const Footer = () => {
  return (

    <footer className="bgFooter shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            {/* <img src="" className="h-8 mr-3"/> */}
            <span className="titleFooter self-center text-4xl font-semibold whitespace-nowrap">Rick <span className='span'>&</span> Morty</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li className="flex items-center">
              <Link href="https://github.com/zEstebanz" className="icon text-2xl hover:underline md:mr-6 text-white" target='_blank'><FaGithub /> </Link>
            </li>
            <li className="flex items-center">
              <Link href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" className="icon text-2xl hover:underline md:mr-6 text-white" target='_blank'><FaLinkedin /></Link>
            </li>
            <li className="flex items-center">
              <Link href="https://diario-mk.vercel.app/" className="icon text-2xl hover:underline md:mr-6 text-white" target='_blank'><FaNewspaper /></Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg text-gray-500 sm:text-center dark:text-white textFooter">2024, <Link href="https://esteban-oller.vercel.app/" className="hover:underline textFooter" target='_blank'>Esteban <span className='span'>Oller</span></Link>.</span>
      </div>
    </footer>
  );
};

export default Footer;