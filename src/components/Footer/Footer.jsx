import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_link">
          <h4 className="footer_h4">приєднуйтесь</h4>
          <ul className="footer_ul">
            <li className="item">
              <a href="https://www.instagram.com" className="social__networks">
                <InstagramIcon className="icon-team icon-footer" />
              </a>
            </li>
            <li className="item">
              <a href="https://www.twitter.com" className="social__networks">
                <TwitterIcon className="icon-team icon-footer" />
              </a>
            </li>
            <li className="item">
              <a href="https://www.facebook.com" className="social__networks">
                <FacebookIcon className="icon-team icon-footer" />
              </a>
            </li>
            <li className="item">
              <a href="https://www.linkedin.com" className="social__networks">
                <LinkedInIcon className="icon-team icon-footer" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
