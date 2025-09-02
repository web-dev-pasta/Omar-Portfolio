import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function AnimatedHeaderSection({
  bio,
  name,
  firstSpan,
  secondSpan,
  thirdSpan,
  mobileSpan,
  color,
  maxQuery,
  secondBio = null,
  secondBioMaxQuery = null,
}) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const desc = useRef(null);
  const containerRef = useRef(null);
  const divider = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: maxQuery });
  let secondBioQuery;
  if (secondBio) {
    secondBioQuery = useMediaQuery({ maxWidth: secondBioMaxQuery });
  }
  const bgColor = color.split("-")[1];
  useGSAP(() => {
    gsap.set(divider.current, {
      width: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=50 bottom",
      },
    });
    tl.from([firstText.current, secondText.current], {
      y: 70,
      stagger: 0.012,
      duration: 0.7,
      ease: "circ.out",
    })
      .to(
        divider.current,
        {
          width: `100%`,
          duration: 3.5,
          ease: "power4.out",
        },
        "<"
      )
      .from(
        desc.current.children,
        {
          y: 100,
          opacity: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: "circ.out",
        },
        "<+.2"
      );
  });
  return (
    <div ref={containerRef}>
      <div
        className="flex flex-col gap-y-10 md:gap-y-16 px-10 overflow-hidden"
        style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
      >
        <p
          ref={firstText}
          className={`font-extralight tracking-widest uppercase ${
            secondBioQuery ? `[word-spacing:2px]` : `[word-spacing:15px]`
          } relative left-[10px] ${color}`}
        >
          {secondBioQuery ? secondBio : bio}
        </p>
        <p
          ref={secondText}
          className={`uppercase banner-text-responsive leading-[.52] whitespace-nowrap ${color}`}
        >
          {name}
        </p>
      </div>
      <div className="relative py-10">
        <div
          ref={divider}
          className={`absolute h-[2px] bg-${bgColor} top-[-1px]`}
        />
        <div
          ref={desc}
          className={`font-light uppercase px-10 text-xl md:text-2xl lg:text-3xl leading-normal flex ${
            isMobile ? "items-start" : "items-end"
          } flex-col gap-y-1 ${color}`}
        >
          {!isMobile ? (
            <>
              <span>{firstSpan}</span>
              <span>{secondSpan}</span>
              <span>{thirdSpan}</span>
            </>
          ) : (
            <span>{mobileSpan}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimatedHeaderSection;
