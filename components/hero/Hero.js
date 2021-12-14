import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import { Power2, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
function Hero() {
  const title = useRef();
  const hero_firstImg = useRef();
  const subTitle = useRef();
  const hero = useRef();
  const hero_child = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    console.log(hero_firstImg.current.firstElementChild);
    //title reveals
    const split = new SplitText(title.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(title.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 1,
      delay: 0.2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power2,
    });
    //bring images to life with scrolltrigger
    const split2 = new SplitText(subTitle.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent2 = new SplitText(subTitle.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline({ defaults: { delay: 0.2, duration:1.9 } });
    tl.fromTo(
      hero_firstImg.current,
      {
        x: 2000,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut,
      }
    )
      .fromTo(
        hero_firstImg.current.firstElementChild,
        {
          width: `680px`,
          height: `370px`,
        },
        {
          width: `960px`,
          height: `540px`,
          ease: Power3.easeOut,
        }
      )
      .to(split2.lines, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Power2,
      });
  }, []);
  return (
    <section ref={hero} id="hero">
      <div className={styles._hero}>
        <h1 ref={title}>El Rincon De Mexico</h1>
        <div ref={hero_child} className={styles._hero_child}>
          <div ref={hero_firstImg} className={styles.firstImage_Hero}>
            <img src="/mexican-food.jpg" width="" height="" alt="" />
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
