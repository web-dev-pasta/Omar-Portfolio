import { servicesData } from "../constants/constants";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Services() {
  const bio = "Behind the scene, Beyond the screen";
  const name = "Service";
  const firstSpan = "I build secure, high-performance full-stack apps";
  const secondSpan = "with smooth UX to drive growth";
  const thirdSpan = "not headaches.";
  const mobileSpan = "Secure, fast apps boosting growth.";
  const secondBio = "Sky? Not a limit.";
  const servicesSection = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 585 });
  useGSAP(() => {
    gsap.to(servicesSection.current, {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      scrollTrigger: {
        trigger: servicesSection.current,
        scrub: true,
        start: "top center",
        end: "top+=400 center",
      },
    });
  });
  useEffect(() => {
    gsap.utils.toArray(".reveal-text").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 98%",
          },
        }
      );
    });

    gsap.utils.toArray(".reveal-item").forEach((item) => {
      const children = item.querySelectorAll(".reveal-child");

      gsap.fromTo(
        children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 98%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={servicesSection}
      className="min-h-screen pt-16 bg-black rounded-t-[2rem]"
      id="services"
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
      {servicesData.map((e, i) => {
        return (
          <div
            className="border-t-2 border-t-white/50 py-8 px-10 sticky bg-black"
            key={i}
            style={{
              top: `${isMobile ? 0 : `calc(${i * 5}em)`} `,
              marginBottom: `${
                isMobile ? 0 : `${(servicesData.length - i - 1) * 5}rem`
              } `,
            }}
          >
            <p className="text-2xl md:text-4xl text-white font-light reveal-text">
              {e.title}
            </p>
            <p className="text-lg md:text-2xl !leading-loose text-white/60 my-8 reveal-text italic">
              {e.description}
            </p>

            {e.items.map((e, i) => {
              return (
                <div
                  className={`flex gap-6 text-white text-2xl md:text-3xl font-light mb-8 items-center ${
                    i != 2 ? "border-b" : ""
                  } border-white/20 pb-4 reveal-item`}
                  key={i}
                  style={{
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                  }}
                >
                  <span className="text-white/50 text-lg md:text-2xl reveal-child">
                    0{i}
                  </span>
                  <p className="reveal-child">{e.title}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

export default Services;
