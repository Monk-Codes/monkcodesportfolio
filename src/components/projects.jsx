import styles from "./projects.module.css";
import pro1 from "../assets/Screenshot (26).png";
import pro2 from "../assets/Screenshot (51).png";
import pro3 from "../assets/Screenshot (57).png";

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
       <a href="https://crownbank.netlify.app/" target="_blank">
        <img className={styles.projectImage} src={pro1} alt="pro1" />
       </a>
       <h2>Crown Bank</h2>
       <p className={styles.description}>Modern private banking website landing page</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Simple Banking Webpage</p>
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
       <a href="https://crownbank.netlify.app/" target="_blank">
        <img className={styles.projectImage} src={pro2} alt="pro2" />
       </a>
       <h2>Foody</h2>
       <p className={styles.description}>Your search for food hunger ends here</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Simple food ordering Webpage</p>
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
       <a href="https://crownbank.netlify.app/" target="_blank">
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
    </div>
   </div>
  </section>
 );
}
