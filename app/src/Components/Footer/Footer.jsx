import '../Footer/Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <div className="footCont">
      <div className="logo">
        <a href="https://github.com/Mamupe" target="blank">
          <img
            className="git"
            src="https://res.cloudinary.com/dghnwllrc/image/upload/v1676540033/projects/github_2_kxtspl.png"
            alt="Link github"
          />
        </a>
      </div>
      <p>Make with love by Mamupe 2023</p>

      <div className="logo">
        <a href="https://linkedin.com/in/mario-muñoz-pérez-18351ba6" target="blank">
          <img
            className="linkedin"
            src="https://res.cloudinary.com/dghnwllrc/image/upload/v1676540050/projects/linkedin_2_qrswm3.png"
            alt="Link linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
