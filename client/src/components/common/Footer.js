import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faDiscord } from "@fortawesome/free-brands-svg-icons"; 


const Footer = () => {

    return (
        <div className='grid grid-cols-3 gap-4 p-4 bg-gray-200 h-40'>
          {/* Logo Column */}
          <div className='col-span-1 flex items-center justify-center'>
            <div className='company-name'>
              <h1 className='text-lg font-bold'>
                <span className="inline-block animate-bounce">L</span>
                <span className="inline-block animate-bounce delay-100">e</span>
                <span className="inline-block animate-bounce delay-200">a</span>
                <span className="inline-block animate-bounce delay-300">r</span>
                <span className="inline-block animate-bounce delay-400">n</span>
                <span className="inline-block animate-bounce delay-500">L</span>
                <span className="inline-block animate-bounce delay-600">i</span>
                <span className="inline-block animate-bounce delay-700">n</span>
                <span className="inline-block animate-bounce delay-800">k</span>
              </h1>
            </div>
          </div>
      
          {/* Links Column */}
          <div className='col-span-1 flex items-center justify-center'>
            <div className='text-center'>
              {/* Add your links here */}
            </div>
          </div>
      
          {/* Social Column */}
          <div className='col-span-1 flex items-center justify-center'>
            <div className='flex justify-center space-x-4'>
              <a href="https://www.linkedin.com/in/derrick-c-19659211a/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-blue-500 transform transition-transform">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a href="https://github.com/dcleavall" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-blue-500 transform transition-transform">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a href="https://medium.com/@dcleavall" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-blue-500 transform transition-transform">
                <FontAwesomeIcon icon={faMedium} size="3x" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-blue-500 transform transition-transform">
                <FontAwesomeIcon icon={faDiscord} size="3x" />
              </a>
            </div>
          </div>
        </div>
      );
      
}

export default Footer;
