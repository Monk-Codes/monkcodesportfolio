import styles from "./projects.module.css";
import pro1 from "../assets/Screenshot (25).png";
import pro2 from "../assets/Screenshot (134).png";
import pro3 from "../assets/Screenshot (57).png";
import pro4 from "../assets/Screenshot (18).png";
import pro5 from "../assets/Screenshot (101).png";
import pro6 from "../assets/Screenshot (116).png";
import pro7 from "../assets/Screenshot (130).png";
import pro8 from "../assets/Screenshot (131).png";

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
       <a href="https://buy8.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro5} alt="pro5" />
       </a>
       <h2>BUY8</h2>
       <p className={styles.description}>Shopping made simple and fast</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>E-Commerce Shopping Website</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=react,tailwind,firebase" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <a href="https://justdevs.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro6} alt="pro6" />
       </a>
       <h2>Just Devs</h2>
       <p className={styles.description}>Developers Blog with code sharing Application</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>CRUD Application using Firebase</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=react,tailwind,firebase" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
     <div className={styles.nft}>
      <div className={styles.main}>
       <a href="https://sparki.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro7} alt="pro7" />
       </a>
       <h2>Sparki</h2>
       <p className={styles.description}>Realtime Chat Application</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Chat with your friends & family - share Photos </p>
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
       <a href="https://aipromptz.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro8} alt="pro8" />
       </a>
       <h2>AI Prompts</h2>
       <p className={styles.description}>Share your AI prompts online</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Explore world of prompts</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=next,tailwind,firebase" alt="skill-icon" />
         </ins>
        </div>
       </div>
       <hr />
      </div>
     </div>
    </div>
   </div>
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.bg}>
      <h1>Pratik Jaiswal</h1>
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
       <a href="https://aistarwar.netlify.app" target="_blank">
        <img className={styles.projectImage} src={pro2} alt="pro2" />
       </a>
       <h2>AI starwar theme</h2>
       <p className={styles.description}>UI/UX site Made using GSAP</p>
       <div className={styles.projectInfo}>
        <div className={styles.info}>
         <p>Feel the modern Scroll Effect</p>
        </div>
        <div className={styles.skills}>
         <ins>
          <img src="https://skillicons.dev/icons?i=vite,netlify,js,css" alt="skill-icon" />
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
