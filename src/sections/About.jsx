import React from "react";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const bio = "Code with purpose, Built to scale";
  const name = "about";
  const firstSpan = "Passionate about clean architecture";
  const secondSpan = "I build scalable, high-performance solutions";
  const thirdSpan = "from prototype to production";
  const mobileSpan = "Scalable, clean architecture solutions";
  const secondBio = "Purposeful. Scalable. Code.";
  const aboutSection = useRef(null);
  const aboutInfo = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 585 });
  const cld = new Cloudinary({ cloud: { cloudName: "dwcxvcjrr" } });
  const man = cld
    .image(`v1756798971/ChatGPT_Image_Sep_2_2025_10_39_04_AM_jlf8t2.png`)
    .format("auto")
    .quality("auto")
    .resize(auto().width(400));
  useGSAP(() => {
    gsap.to(aboutSection.current, {
      scale: 0.96,
      scrollTrigger: {
        trigger: aboutSection.current,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".man-img", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".man-img",
        start: "top 90%",
      },
    });
    const children = aboutInfo.current.querySelectorAll(".reveal-child");

    children.forEach((child) => {
      gsap.fromTo(
        child,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: child,
            start: "top 98%",
          },
        }
      );
    });
  });
  return (
    <section
      id="about"
      ref={aboutSection}
      className="bg-black rounded-b-[2rem] py-16"
    >
      <AnimatedHeaderSection
        bio={bio}
        name={name}
        firstSpan={firstSpan}
        secondSpan={secondSpan}
        thirdSpan={thirdSpan}
        mobileSpan={mobileSpan}
        color="text-white"
        maxQuery={620}
        secondBio={secondBio}
        secondBioMaxQuery={640}
      />
      <div className="info flex gap-4 flex-col lg:flex-row justify-center px-10 items-center">
        <div className="image w-full flex justify-center">
          <AdvancedImage
            cldImg={man}
            alt="man"
            className="rounded-3xl man-img"
          />
        </div>
        <div
          ref={aboutInfo}
          className="desc text-lg md:text-2xl !leading-loose text-white/60 my-8 flex flex-col gap-y-5 flex-wrap"
        >
          <p className="reveal-child">
            Obsessed with building fast, intuitive apps—from pixel-perfect React
            UIs to bulletproof serverless backends. Every line of code is a
            promise: quality that users feel.
          </p>
          <p className="reveal-child">When I’m not shipping:</p>
          <p className="reveal-child">
            ⚡️ Open-sourcing my latest experiment (or hacking on yours)
          </p>

          <p className="reveal-child">
            🧗 Rock climbing (problem-solving with real stakes)
          </p>
          <p className="reveal-child">
            🎸 Strumming chords while CI pipelines pass (multitasking at its
            finest)
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
