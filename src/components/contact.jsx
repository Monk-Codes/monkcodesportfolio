import styles from "./contact.module.css";
import map from "../assets/map.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
export default function Contact() {
 return (
  <>
   <section className={styles.contact} id="contact">
    <div className={styles.container}>
     <div className={styles.contact_content}>
      <div className={styles.contact_title}>
       <p>Contact</p>
       <hr />
       <h3>Get the best out of one 👇</h3>
      </div>
      <div className={styles.contact_icons}>
       <div className={styles.contact_icon_box}>
        <span>
         <img src={map} alt="map" />
        </span>
        <div className={styles.contact_info}>
         <h3>Location</h3>
         <p>Kolkata,India</p>
        </div>
       </div>
       <div className={styles.contact_icon_box}>
        <span>
         <img src={mail} alt="mail" />
        </span>
        <div className={styles.contact_info}>
         <h3>Mail</h3>
         <a href="mailto:monkcodesdev@gmail.com">monkcodesdev@gmail.com</a>
        </div>
       </div>
       <div className={styles.contact_icon_box}>
        <span>
         <img src={phone} alt="phone" />
        </span>
        <div className={styles.contact_info}>
         <h3>WhatsApp</h3>
         <a href="https://wa.me/8961894629">Connect on WhatsApp</a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
