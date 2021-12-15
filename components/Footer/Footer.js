import styles from "../../styles/Home.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_child}>
        <div className={styles.footer_detailes}>
          <div className={styles.happyClients}>
            <h3>+5K</h3>
            <p>Happy Client</p>
          </div>
          <div className={styles.happyClients}>
            <h3>+300</h3>
            <p>
              Client Command<sub>perday</sub>
            </p>
          </div>
          <div className={styles.happyClients}>
            <h3>+300</h3>
            <p>Happy Childs</p>
          </div>
        </div>
        <hr />
        <div className={styles.last_section_footer}>
          <div className={styles.ptop}>
            <Link href="/privacy-policy.html">
              <a>
                <p>Privacy Policy</p>
              </a>
            </Link>
            <Link href="/termofservices.html">
              <a>
                <p>Term of Services</p>
              </a>
            </Link>
            <Link href="/contactus.html">
              <a>
                <p>Contact Us</p>
              </a>
            </Link>
          </div>
          <p>©2021 JFF FastFood®. All Rights Reserved</p>
          <p className={styles.addresse}>
            6645 S Halsted St, Chicago, IL 60621, United States
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
