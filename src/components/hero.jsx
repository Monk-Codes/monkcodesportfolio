import styles from "./hero.module.css";

export default function Hero() {
 return (
  <div className={styles.hero}>
   <div className={styles.content}>
    <div className={styles.content__container}>
     <p className={styles.content__container__text}>Pratik Jaiswal</p>

     <ul className={styles.content__container__list}>
      <li className={styles.content__container__list__item}>REACT</li>
      <li className={styles.content__container__list__item}>NEXT</li>
      <li className={styles.content__container__list__item}>JAVASCRIPT</li>
      <li className={styles.content__container__list__item}>CSS</li>
     </ul>
    </div>
    {/* <p className={styles.subtitle}>React Developer</p> */}
    <p className={styles.description}>Passionate about building modern and user-friendly web applications with React.</p>
    <p className={styles.contact}>Contact me at: monkcodesdev@gmail.com</p>
   </div>
  </div>
 );
}
