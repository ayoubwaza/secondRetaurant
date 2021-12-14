import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Gallery() {
  const gaga = useRef();
  useEffect(() => {
    //horizontal scroll
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrappingIT",
        pin: true,
        start: "top top",
        scrub: 1,
        pinSpacer: false,
        pinSpacing: true,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 1, max: 2 },
        },
        end: () => "+=" + document.querySelector(".wrappingIT").offsetWidth,
      },
    });
  }, []);
  return (
    <div ref={gaga} className="wrappingIT">
      <div className="panel green">
        <h2>The 1 Pannel</h2>
        <div>
          <img src="/image1.jpeg" width="400" height="400" alt="" />
        </div>
      </div>
      <div className="panel white">
        <h2>The 2 Pannel</h2>
        <div>
          <img src="/image1.jpeg" width="400" height="400" alt="" />
        </div>
      </div>
      <div className="panel red">
        <h2>The 3 Pannel</h2>
        <div>
          <img src="/image1.jpeg" width="400" height="400" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
