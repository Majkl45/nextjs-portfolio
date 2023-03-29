import Image from "next/image";
import aboutImg from "/public/hacker.svg"

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="title">About Me</h2>
      <div className="mx-4 mt-10 flex flex-col md:flex-row justify-center items-center gap-10 text-start">
        <Image
        className="about-img"
        src={aboutImg}
        alt="portfolio-img"
        width={280}
        height={300}
        priority
        style={{
          objectFit: "cover",
        }}/>
        <div className="flex flex-col gap-4 mx-5 md:max-w-[40rem]">
          <p className="text-lg font-medium">
            Junior Front-End Developer at the beginning of career.
            I am very passionate about improving my coding skills & developing applications & websites.
            Proficient in semantic <span className="text-green p-1">HTML, CSS, JavaScript</span>  and modern frameworks 
            like <span className="text-green p-1">Vue.js</span>.
            I also know the basics of backend technologies like Node.js, Php, MySql...
          </p>
          <p className="text-lg font-medium">
            Currently I am improving my knowledge about <span className="text-green p-1">Vue.js</span>,
            which is actually my favorite JavaScript framework and I am also trying <span className="text-green p-1">React</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;