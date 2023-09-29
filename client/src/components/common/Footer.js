import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faSnapchat, faDiscord } from "@fortawesome/free-brands-svg-icons"; 


const Footer = () => {

    return (
        <div className='footer'>
        <h1>Logo</h1>
        <hr class="border-t-2 border-solid" />
            <div className='media'>
            <a href="https://www.linkedin.com/in/derrick-c-19659211a/" target="_blank" rel="noopener noreferrer" className="linkedin-icon text-green-400 hover:text-blue-500 transform transition-transform">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>{'       '}
                <a href="https://github.com/dcleavall" target="_blank" rel="noopener noreferrer" className="github-icon text-green-400 hover:text-blue-500 transform transition-transform">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>{'       '}
                <a href="https://medium.com/@dcleavall" target="_blank" rel="noopener noreferrer" className="medium-icon text-green-400 hover:text-blue-500 transform transition-transform">
                    <FontAwesomeIcon icon={faMedium} size="2x" />
                </a>{'       '}
                <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="snapchat-icon text-green-400 hover:text-blue-500 transform transition-transform">
                <FontAwesomeIcon icon={faSnapchat} size="2x" />
                </a>{'       '}
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="discord-icon text-green-400 hover:text-blue-500 transform transition-transform">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a> 
            </div>
        
        </div>
    );
    
    }

export default Footer;