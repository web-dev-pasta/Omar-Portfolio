import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Particles from "../components/Particles";

function Hero() {
  const bio = "404 no bugs found";
  const name = "omar nasser";
  const firstSpan = "I help growing brands and startups gain an";
  const secondSpan = "unfair advantage through premium";
  const thirdSpan = "results driven webs/apps";
  const mobileSpan = "High-end webistes right between your hands";
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Particles />
      </div>
      <AnimatedHeaderSection
        bio={bio}
        name={name}
        firstSpan={firstSpan}
        secondSpan={secondSpan}
        thirdSpan={thirdSpan}
        mobileSpan={mobileSpan}
        color="text-black"
        maxQuery={585}
      />
    </section>
  );
}

export default Hero;
