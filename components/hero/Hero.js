import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import { Power2, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
function Hero() {
  const title = useRef();
  const hero_firstImg = useRef(null);
  const subTitle = useRef();
  const hero = useRef();
  const hero_child = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    //title reveals
    const split = new SplitText(title.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(title.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.fromTo(
      split.lines,
      { y: 1000, opacity: 0 },
      {
        duration: 1,
        delay: 0.2,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Power2,
      }
    );
    //bring images to life with scrolltrigger
    const split2 = new SplitText(subTitle.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent2 = new SplitText(subTitle.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline({
      delay: 0.2,
      duration: 1.2,
      ease: Power3.easeOut,
    });
    tl.fromTo(
      hero_firstImg.current,
      {
        x: 200,
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut,
      }
    )
      .to(split2.lines, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Power2,
        fontSize: "100px",
      })
      .to(hero_firstImg.current.children[0], {
        scale: 1.6,
      });
  }, []);
  return (
    <section ref={hero} id="hero">
      <div className={styles._hero}>
        <h1 ref={title}>El Rincon De Mexico</h1>
        <div ref={hero_child} className={styles._hero_child}>
          <div ref={hero_firstImg} className={styles.firstImage_Hero}>
          <img src="./image.jpeg" width="" height="" alt="" />

          </div>
          <div className={styles.image_hero_text}>
            <h2 ref={subTitle}>Mexico...</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
