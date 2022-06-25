import React from 'react';

import { FaFacebookSquare, FaTwitterSquare,FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer--socials">
      <FaFacebookSquare />
      <FaTwitterSquare />
      <FaInstagramSquare />
      <FaLinkedin />
      <FaGithubSquare />
    </div>
  );
}
