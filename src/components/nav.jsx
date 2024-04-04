import styles from "./nav.module.css";
import logo from "../assets/logo.png";
import mobicon from "../assets/mobicon.svg";
import closemobicon from "../assets/closemobicon.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  const checkWindowSize = () => {
   setIsMobile(window.innerWidth <= 600);
  };

  checkWindowSize();

  window.addEventListener("resize", checkWindowSize);

  return () => {
   window.removeEventListener("resize", checkWindowSize);
  };
 }, []);

 const toggleSidebar = () => {
  setIsOpen(!isOpen);
 };

 const closeMobileMenu = () => {
  setIsOpen(false);
 };

 return (
  <>
   <nav className={styles.navbar}>
    <a href="/" className={styles.logo}>
     <img src={logo} alt="Monk Codes" className={styles.img} />
    </a>
    <div className={styles.navbarHeader} onClick={toggleSidebar}>
     <img src={isOpen ? closemobicon : mobicon} alt="close" className={styles.img} />
    </div>
    <ul className={`${styles.navList} ${isMobile && isOpen ? styles.active : ""}`}>
     <li>
      <a href="#home">Home</a>
     </li>
     <li>
      <a href="#about">About</a>
     </li>
     <li>
      <a href="#projects">Projects</a>
     </li>
     <li>
      <a href="#contact">Contact</a>
     </li>
    </ul>
   </nav>
   {/* Close mobile menu when mobicon is clicked */}
   {isMobile && isOpen && <div className={styles.overlay} onClick={closeMobileMenu}></div>}
  </>
 );
}
