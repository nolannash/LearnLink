import React from "react";

function Footer() {
  return (
    <div className="bg-gray-300 h-48 pt-4 p-2 flex flex-col items-center justify-between ">
      <div>Logo</div>
      <hr className="border-b min-w-full border-gray-800 border-0" />
      <div className="hidden md:flex space-x-14 justify-start">
        <a href="/">Home</a>
        <a href="/">About LearnLink</a>
        <a href="/">Courses</a>
        <a href="/">Join LearnLink</a>
        <a href="/">My Profile</a>
        <a href="/">Contact Us</a>
        <a href="/">Resources</a>
      </div>

      <div className="flex space-x-6 justify-start">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.x.com">X</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="/">Message</a>
      </div>
      <div> Copyright &#169; 2023. All rights reserved.</div>
    </div>
  );
}

export default Footer;
