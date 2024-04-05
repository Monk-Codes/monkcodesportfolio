import styles from "./about.module.css";
import ideogram from "../assets/ideogram.jpeg";
import logo from "../assets/Color.svg";
import fd from "../assets/fd.svg";
export default function About() {
 return (
  <>
   <section id="about" className={styles.about}>
    <div className={styles.container}>
     <div className={styles.about_content}>
      <div className={styles.img_side}>
       <img src={logo} alt="monk codes" className={styles.work_emoji} />
       <img src={ideogram} alt="frontend developer" className={styles.img_side_main_img} />
       <span>
        <img src={fd} alt="fd" />
       </span>
      </div>
      <div className={styles.text_side}>
       <h3>About Me</h3>
       <h4>
        Front-end Developer
        <br />
        based in Kolkata,India 📍
       </h4>
       <p>
        Hey, my name is Pratik, and I am a Frontend Developer. My passion is to create and develop applications using DRY principle. <br />
        My main stack currently is React Js in combination with Tailwind,Sass and I have also knowledge of TypeScript.
       </p>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
