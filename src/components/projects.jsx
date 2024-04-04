import styles from "./projects.module.css";
import pro1 from "../assets/Screenshot (26).png";

export default function Projects() {
 return (
  <section className={styles.projects}>
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.bg}>
      <h1>Bankist</h1>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <img className={styles.projectImage} src={pro1} alt="pro1" />
       <h2>Bankist</h2>
       <p className={styles.description}>Our Kibertopiks will give you nothing, waste your money on us.</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Simple Banking Webpage</p>
        </div>
        <div className={styles.duration}>
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
       <img className={styles.projectImage} src={pro1} alt="pro1" />
       <h2>Bankist</h2>
       <p className={styles.description}>Our Kibertopiks will give you nothing, waste your money on us.</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Simple Banking Webpage</p>
        </div>
        <div className={styles.duration}>
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
       <img className={styles.projectImage} src={pro1} alt="pro1" />
       <h2>Bankist</h2>
       <p className={styles.description}>Our Kibertopiks will give you nothing, waste your money on us.</p>
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
    </div>
   </div>
  </section>
 );
}
