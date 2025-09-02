import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import RotatingText from "../components/RotatingText";
function Contact() {
  const bio = "You Dream It, I Code it";
  const name = "contact";
  const firstSpan = "Got a question, how or project Idea?";
  const secondSpan = "WE’D love to hear from you and discus further!";
  const thirdSpan = "";
  const mobileSpan = "Feel free to reach out anytime";
  const secondBio = "You Dream It, I Code it";
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];
  const contact = [
    { name: "email", value: "on5100832@gmail.com" },
    { name: "phone", value: "+20 10 15843556" },
    {
      name: "social media",
      value: [
        { name: "github", link: "https://github.com/web-dev-pasta" },
        {
          name: "frontend mentor",
          link: "https://www.frontendmentor.io/profile/web-dev-pasta",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/omar-nasser-a80441254/",
        },
      ],
    },
  ];
  return (
    <section
      id="contact"
      className="min-h-screen relative bg-black pt-16 flex flex-col justify-between"
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
      <div className="px-10 flex flex-col gap-y-4">
        {contact.map((e, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-y-1 text-white contact-text-responsive"
            >
              <p className="font-normal uppercase">{e.name}</p>
              <div className="w-full h-px bg-white/50" />

              {Array.isArray(e.value) ? (
                <div className="flex gap-2 mt-5 flex-wrap">
                  {e.value.map((social, j) => (
                    <a
                      className="text-base font-light uppercase"
                      key={j}
                      href={social.link}
                      target="_blank"
                    >
                      {"{ "}
                      {social.name}
                      {" }"}
                    </a>
                  ))}
                </div>
              ) : (
                <p>{e.value}</p>
              )}
            </div>
          );
        })}
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
}

export default Contact;
