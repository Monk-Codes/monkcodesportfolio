import styles from "./projects.module.css";
import pro1 from "../assets/Screenshot (25).png";
import pro2 from "../assets/Screenshot (71).png";
import pro3 from "../assets/Screenshot (57).png";
import pro4 from "../assets/Screenshot (18).png";

export default function Projects() {
 return (
  <section className={styles.projects} id="projects">
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.bg}>
      <h1>Monk Codes</h1>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <a href="https://affordigo.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro1} alt="pro1" />
       </a>
       <h2>Affordigo</h2>
       <p className={styles.description}>Modern Hotel Booking Landing Page</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Online Booking Webpage</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=html,css,js" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <a href="https://quiz-monkcodes.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro2} alt="pro2" />
       </a>
       <h2>React Quiz Game</h2>
       <p className={styles.description}>Answer react related questions in a MCQ Format</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Evaluate Yourself</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=html,css,react" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <a href="https://todomasterjs.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro3} alt="pro3" />
       </a>
       <h2>Todo App</h2>
       <p className={styles.description}>A todo app with priority levels</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>On the go todo app</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=html,css,react" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <a href="https://alpha-dx.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro4} alt="pro4" />
       </a>
       <h2>Alpha - X</h2>
       <p className={styles.description}>A Fitness Studio Landing Page</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Explore your Limits</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=html,css,scss" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
