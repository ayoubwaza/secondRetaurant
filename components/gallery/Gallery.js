import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Gallery() {
  const gaga = useRef();
  const green_panel = useRef(null);
  const white_panel = useRef(null);
  const red_panel = useRef(null);
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
          duration: { min: 5, max: 5 },
        },
        end: () => "+=" + document.querySelector(".wrappingIT").offsetWidth,
      },
    });
  }, []);
  return (
    <div ref={gaga} className="wrappingIT">
      <div ref={green_panel} className="panel green">
        <h2>THE GREEN COLOR</h2>
        <div>
          <img src="/image1.jpeg" width="400" height="400" alt="" />
        </div>
      </div>
      <div ref={white_panel} className="panel white">
        <h2>The 2 Pannel</h2>
        <div>
          <img src="/image1.jpeg" width="400" height="400" alt="" />
        </div>
      </div>
      <div ref={red_panel} className="panel red">
        <h2>The 3 Pannel</h2>
        <div>
          <img src="/image1.jpeg" width="400" height="400" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
