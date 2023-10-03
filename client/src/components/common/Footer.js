import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import divider from "../../public/Divider.png";

const Footer = () => {
  return (
    <div className="mt-6">
      <img src={divider} alt="wavy divider" className="w-screen" />
      <div className="grid grid-cols-4 gap-4 p-4 text-slate-900 h-40">
        {/* Logo Column */}
        <div className="col-span-1 flex items-center justify-end">
          <div className="company-name">
            <h1 className="text-5xl font-bold italic text-green-900">
              learnlink
            </h1>
          </div>
        </div>


        {/* Links Column */}
        <div className="col-span-2 flex items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-3 grid-flow-col text-center">
            <Link href="">Home</Link>
            <Link href="">About LearnLink</Link>
            <Link href="">Resources</Link>
            <Link href="">Teachers</Link>
            <Link href="">Students</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Blog</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>

        {/* Social Column */}
        <div className="col-span-1 flex flex-col items-start justify-around">
          <div className="flex justify-between space-x-12">
            <a
              href="https://www.facebook.com/learnlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a
              href="https://twitter.com/learnlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
            <a
              href="https://instagram.com/learnlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </div>
          <div>
            <p className="text-xs">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
          <div className="bottom-0 left-0 right-0 text-center bg-gray-200 p-2">
              Copyright &#169; 2023. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
