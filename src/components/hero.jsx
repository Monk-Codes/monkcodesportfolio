import { SocialIcon } from "react-social-icons";
import styles from "./hero.module.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
 return (
  <div className={styles.hero} id="home">
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.hero_main}>
      <div className={styles.hero_text}>
       <p className={styles.subtitle}>Monk Codes💻</p>
       <p className={styles.description}>Passionate about building modern and user-friendly web applications with React.</p>
       <span>
        <SocialIcon url="https://linkedin.com/in/dxpratikk" bgColor="#ccc" target="_blank" />
        <SocialIcon url="https://github.com/Monk-Codes" bgColor="#ccc" target="_blank" />
       </span>
       <div className={styles.content__container}>
        <p className={styles.content__container__text}>Pratik Jaiswal</p>
        <ul className={styles.content__container__list}>
         <li className={styles.content__container__list__item}>REACT</li>
         <li className={styles.content__container__list__item}>NEXT</li>
         <li className={styles.content__container__list__item}>JAVASCRIPT</li>
         <li className={styles.content__container__list__item}>CSS</li>
        </ul>
       </div>
      </div>

      <img src={profile} alt="Monk Codes" className={styles.img} />
     </div>
     <div className={styles.skills}>
      <p className={styles.para}>Tech Stack</p>
      <div className={styles.logos}>
       <ul>
        <li>
         <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" />
         <img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" />
         <img src="https://skillicons.dev/icons?i=react,next" alt="skill-icon" />
         <img src="https://skillicons.dev/icons?i=tailwind,scss" alt="skill-icon" />
        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
