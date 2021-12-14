import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Gallery() {
  const gaga = useRef(null);
  useEffect(() => {
    //horizontal scroll
    const panels = gsap.utils.toArray(".pannel");
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapping",
        pin: true,
        start: "top top",
        scrub: 1,
        markers: {
          startColor: "green",
          endColor: "green",
          fontSize: "20px",
        },
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + document.querySelector(".wrapping"),
      },
    });
  }, []);
  return (
    <div className={styles.main}>
      <h1>HELLO</h1>
      <div ref={gaga} className="wrapping">
        <div className="pannel first">Pannel1</div>
        <div className="pannel second">Pannel2</div>
        <div className="pannel third">Pannel3</div>
        <div className="pannel fourth">Pannel4</div>
      </div>
    </div>
  );
}

export default Gallery;
