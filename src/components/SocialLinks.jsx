// src/components/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a title='GitHub'
        href="https://github.com/avillegas1717"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Alicia's GitHub"
      >
        <FaGithub size={32} />
      </a>
      <a title='LinkedIn'
        href="https://linkedin.com/in/alicia-m-villegas/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Alicia's LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
    </div>
  );
};

export default SocialLinks;
