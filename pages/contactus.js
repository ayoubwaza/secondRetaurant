import React from "react";
import styles from "../styles/Home.module.scss";
import Footer from '../components/Footer/Footer'
import Head from "next/head";
function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <Head>
        <title>Jarabe Mexican Street Food - contact us</title>
        <meta name="description" content="chicago Jarabe Mexican Street Food" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <style jsx global>
        {`
          body {
            background: #000;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div className={styles.contactUs_child}>
        <h1>We are so excited to hear from you</h1>
        <form>
          <div>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="your name is here"
            />
          </div>
          <div>
            <input
              type="text"
              name="City"
              id="City"
              placeholder="your city here"
            />
          </div>
          <div>
            <input
              type="text"
              name="Addresse"
              id="Addresse"
              placeholder="Addresse"
            />
          </div>
          <div>
            <input
              type="tel"
              name="PhoneNumber"
              id="PhoneNumber"
              placeholder="phone number"
            />
          </div>
          <div>
            <input
              type="email"
              name="Mail"
              id="Mail"
              placeholder="@example.com"
            />
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
