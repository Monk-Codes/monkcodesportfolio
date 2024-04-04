import styles from "./footer.module.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
 return (
  <>
   <footer className={styles.footer}>
    <div className={styles.container}>
     <div className={styles.footerc}>
      <h3> Copyright © 2024 All Rights are reserved </h3>
      <div className={styles.footerc_socials}>
       <SocialIcon url="https://linkedin.com/in/dxpratikk" bgColor="#2d2e32" />
       <SocialIcon url="https://github.com/Monk-Codes" bgColor="#2d2e32" />
      </div>
     </div>
    </div>
   </footer>
  </>
 );
}
