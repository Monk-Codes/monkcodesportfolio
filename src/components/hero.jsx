import { SocialIcon } from "react-social-icons";
import styles from "./hero.module.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
 return (
  <div className={styles.hero}>
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.hero_main}>
      <div className={styles.hero_text}>
       <div className={styles.content__container}>
        <p className={styles.content__container__text}>Pratik Jaiswal</p>
        <ul className={styles.content__container__list}>
         <li className={styles.content__container__list__item}>REACT</li>
         <li className={styles.content__container__list__item}>NEXT</li>
         <li className={styles.content__container__list__item}>JAVASCRIPT</li>
         <li className={styles.content__container__list__item}>CSS</li>
        </ul>
       </div>
       <p className={styles.subtitle}>Monk Codes 💻</p>
       <p className={styles.description}>Passionate about building modern and user-friendly web applications with React.</p>
      </div>

      <img src={profile} alt="Monk Codes" className={styles.img} />
     </div>
     <div className={styles.skills}>
      <div className={styles.logos}>
       <p className={styles.contact}>
        <SocialIcon url="https://linkedin.com/in/dxpratikk" />
        <SocialIcon url="https://github.com/Monk-Codes" />
        <SocialIcon url="https://instagram.com/monk_codes" />
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
