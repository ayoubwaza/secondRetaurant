import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import { Power2, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Expo } from "gsap";
function Ourstory() {
  const titleStory = useRef();
  const ourstory = useRef();
  const paraOurstory = useRef();
  const image_ourStory = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);
  useEffect(() => {
    const mySplitText = new SplitText(paraOurstory.current, {
        type: "words,chars",
      }),
      chars = mySplitText.chars;
    gsap.set(paraOurstory.current, { perspective: 400 });
    const spliTitle = new SplitText(titleStory.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParentTitle = new SplitText(titleStory.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline({
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: ourstory.current,
        toggleActions: "play",
        start: "top top",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      spliTitle.lines,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    )
      .from(chars, {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      })
      .fromTo(
        image_ourStory.current,
        { opacity: 0, x: -800 },
        {
          opacity: 1,
          x: 0,
          duration:0.9,
        }
      )
      .to(image_ourStory.current.children[0], {
        scale: 1.6,
      });
  }, []);
  return (
    <section className={styles.ourStorySectyion} ref={ourstory}>
      <div className={styles._ourStory}>
        <h1 ref={titleStory}>Our Story</h1>
        <div className={styles.ourStory_child}>
          <div className={styles.ourStory_handelContent}>
            <p ref={paraOurstory}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              alias aliquam, sapiente quo ullam eius autem itaque quibusdam
              <br />
              sequi, id velit odit non! Consectetur velit molestiae illo eius
              fugiat quas?
            </p>
          </div>
          <div>
            <div className={styles.handle_image_ourStory} ref={image_ourStory}>
              <img src="/image1.jpeg" width="800" height="400" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Ourstory;
