import { Nav } from "../constants/constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function NavBar() {
  const tl = useRef(null);
  const Links = Nav.Links;
  const Media = Nav.Media;
  const toggleBtn = useRef(null);
  const menu = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const menuLinks = useRef([]);
  const [showToggle, setShowToggle] = useState(true);
  useGSAP(() => {
    gsap.set(menu.current, { xPercent: 100 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menu.current, {
        xPercent: 0,
        duration: 0.5,
        ease: "sine.out",
      })
      .to(
        ".first",
        {
          rotate: 45,
          y: 3,
        },
        "<"
      )
      .to(
        ".second",
        {
          rotate: -45,
          y: -0.1,
        },
        "<"
      );

    ScrollTrigger.create({
  trigger: document.body,
  start: 0,
  end: "max",
  onUpdate: (self) => {
    const scrollPos = self.scroll(); 
    const direction = self.direction;

    if (scrollPos > 300) {
      if (direction === -1) {
        toggleBtn.current.classList.remove("not-active");
        setShowToggle(true);
      } else {
        toggleBtn.current.classList.add("not-active");
        setShowToggle(false);
      }
    } else {
      toggleBtn.current.classList.remove("not-active");
      setShowToggle(true);
    }
  },
});

  }, []);
  const toggleMenu = () => {
    if (isActive) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsActive(!isActive);
  };

  return (
    <section className="navbar">
      <div className="target-ele absolute top-0 left-0"></div>

      <nav
        ref={menu}
        className="fixed right-0 w-full h-full bg-black md:w-1/2 py-28 flex flex-col justify-between z-50 text-white font-light uppercase px-12"
      >
        <div className="text-3xl origin-center sm:text-4xl md:text-5xl links flex flex-col gap-y-3">
          {Links.map((e, i) => {
            return (
              <Link
                to={`${e}`}
                key={i}
                ref={(el) => (menuLinks.current[i] = el)}
                className=" cursor-pointer transform md:hover:translate-x-2 uppercase text-white/80 hover:text-white outline-none transition-all duration-200 w-fit"
                smooth
                offset={0}
                duration={1000}
                onClick={toggleMenu}
              >
                {e}
              </Link>
            );
          })}
        </div>
        <div className="contact links flex flex-col gap-y-10">
          <div className="email flex flex-col gap-y-1">
            <p className="uppercase text-white/50">e mail</p>
            <p className="lowercase">on5100832@gmail.com</p>
          </div>
          <div className="socials flex flex-col gap-y-2">
            <p className="uppercase text-white/50">social media</p>
            <div className="media flex flex-col gap-y-2">
              {Media.map(({ name, link }, i) => {
                return (
                  <a
                    className="outline-none"
                    key={i}
                    href={link}
                    target="_blank"
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <div
        ref={toggleBtn}
        onClick={toggleMenu}
        className="toggle-btn cursor-pointer fixed top-4 right-4 bg-black rounded-full w-10 h-10 flex flex-col gap-y-[2px] z-50 justify-center items-center transition-all duration-300"
        style={
          showToggle
            ? { clipPath: "circle(50% at 50% 50%)" }
            : isActive
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span className="first h-px w-4 bg-white"></span>
        <span className="second h-px w-4 bg-white"></span>
      </div>
    </section>
  );
}

export default NavBar;
