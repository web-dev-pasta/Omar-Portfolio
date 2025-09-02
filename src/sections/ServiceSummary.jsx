import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function ServiceSummary() {
  const summary = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const isTinyMobile = useMediaQuery({ maxWidth: 450 });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: summary.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.to(first.current, {
      xPercent: -30,
    })
      .to(
        second.current,
        {
          xPercent: isTinyMobile ? 20 : 10,
        },
        "<"
      )
      .to(
        third.current,
        {
          xPercent: isTinyMobile ? -30 : isMobile ? -20 : -10,
        },
        "<"
      )
      .to(
        fourth.current,
        {
          xPercent: 5,
        },
        "<"
      );
  });

  return (
    <section ref={summary} className="my-20 flex flex-col overflow-x-hidden">
      <p
        ref={first}
        className="w-fit mx-auto services-text-responsive translate-x-10"
      >
        Architucture
      </p>
      <div
        ref={second}
        className="flex gap-2 services-text-responsive items-center justify-center -translate-x-16"
      >
        <p>Development</p>
        <div className="h-[3px] w-16 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        ref={third}
        className="flex gap-2 services-text-responsive items-center justify-center translate-x-20"
      >
        <p>APIs</p>
        <div className="h-[3px] w-16 bg-gold " />
        <p className="italic">Frontends</p>
        <div className="h-[3px] w-16 bg-gold" />
        <p>Scalability</p>
      </div>
      <p
        ref={fourth}
        className="services-text-responsive text-center translate-x-2"
      >
        Databases
      </p>
    </section>
  );
}

export default ServiceSummary;
