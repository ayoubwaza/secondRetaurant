import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import { Power2, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
    const fruits = image_ourStory.firstElementChild;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ourstory.current,
          toggleActions: "play",
          start: "top top",
          scrub: 1,
          pin: true,
          markers: {
            startColor: "red",
            endColor: "red",
            fontSize: "50px",
          },
        },
      })
      .to(spliTitle.lines, {
        duration: 1.6,
        delay: 0.2,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Power2.easeInOut,
      })
      .from(chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      })
      .from(fruits, {
        y: 800,
        duration: 1.2,
        ease: Power3.easeOut,
      })
      .from(fruits.firstElementChild, {
        scale: 1.6,
        delay: 2,
        duration: 2,
        ease: Power3.easeOut,
      });
  }, []);
  return (
    <section className="ourStorySectyion" ref={ourstory}>
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
            <div
              className={styles.handle_image_ourStory}
              ref={(el) => (image_ourStory = el)}
            >
              <img src="/image1.jpeg" width="800" height="400" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Ourstory;
