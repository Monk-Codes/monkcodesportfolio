import { Link, Outlet } from "react-router-dom";
import styles from "./nav.module.css";
import logo from "../assets/logo.png";
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
 return (
  <>
   <nav className={styles.navbar}>
    <Link to="/" className={styles.logo}>
     <img src={logo} alt="Monk Codes" className={styles.img} />
    </Link>
    <div className={styles.navbarHeader}>
     {isMobile && (
      <button className={styles.hamburger} onClick={toggleSidebar}>
       <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
       <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
       <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </button>
     )}
    </div>
    <ul className={`${styles.navList} ${isMobile && isOpen ? styles.active : ""}`}>
     <li>
      <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="/about">About</Link>
     </li>
     <li>
      <Link to="/portfolio">Portfolio</Link>
     </li>
     <li>
      <Link to="/contact">Contact</Link>
     </li>
    </ul>
   </nav>
   <Outlet />
  </>
 );
}
