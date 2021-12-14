import Head from "next/head";
import Gallery from "../components/gallery/Gallery";
//import Gallery from "../components/gallery/Gallery";
import Hero from "../components/hero/Hero";
import Ourstory from "../components/ourstory/Ourstory";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          body {
            overflow-x: hidden;
          }
        `}
      </style>
      <Hero />
      <Ourstory/>
        <Gallery/>
    </div>
  );
}
