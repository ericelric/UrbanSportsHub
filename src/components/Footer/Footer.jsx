import { NavLink } from 'react-router-dom';
import {
  FaLocationDot,
  FaBottleWater,
  FaQrcode,
  FaCircleUser,
  FaHouse,
} from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
      <NavLink
          to="/disclaimer"
          className={({ isActive }) =>
            `footer__icon-wrapper ${
              isActive ? 'footer__icon-wrapper--active' : ''
            }`
          }
          aria-label="View home"
        >
          <FaHouse className="footer__icon" />
          <span className="footer__text">Home</span>
        </NavLink>
        <NavLink
          to="/disclaimer"
          className={({ isActive }) =>
            `footer__icon-wrapper ${
              isActive ? 'footer__icon-wrapper--active' : ''
            }`
          }
          aria-label="View venues"
        >
          <FaLocationDot className="footer__icon" />
          <span className="footer__text">Venues</span>
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            `footer__icon-wrapper ${
              isActive ? 'footer__icon-wrapper--active' : ''
            }`
          }
          aria-label="View classes"
        >
          <FaBottleWater className="footer__icon" />
          <span className="footer__text">Classes</span>
        </NavLink>
        <NavLink
          to="/check-in"
          className={({ isActive }) =>
            `footer__icon-wrapper ${
              isActive ? 'footer__icon-wrapper--active' : ''
            }`
          }
          aria-label="Check in with QR code"
        >
          <FaQrcode className="footer__icon" />
          <span className="footer__text">Check-in</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `footer__icon-wrapper ${
              isActive ? 'footer__icon-wrapper--active' : ''
            }`
          }
          aria-label="View profile"
        >
          <FaCircleUser className="footer__icon" />
          <span className="footer__text">Profile</span>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
