import Image from "next/image"
import profilePic from "/public/me.jpg"
import Link from "next/link";
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const HomeHero = () => {
  return (
    <section id="home" className="section pb-[12rem]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-16">
        <div className="bg-background-secondary rounded-xl px-5 py-5 md:p-10">
          <h1 className="text-3xl md:text-[clamp(2.5rem,4vw,4rem)] font-extrabold leading-[3rem]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue">Michael</span>
            <div className="inline-block animate-[shaking-hand_2.5s_ease-in-out_infinite]">
              <span >🤚</span>
            </div>
          </h1>
          <h2 className="md:text-[clamp(1.5rem,2vw,2rem)] italic md:mt-10">
            I'm a Junior Front-end Developer
          </h2>
          <div className="mt-5 flex items-center justify-center gap-5 md:text-5xl">
            <Link href={'https://www.linkedin.com/in/michael-rohm-b86509259/'} legacyBehavior>
              <a className="transition ease-in hover:text-green hover:scale-105" target="_blank" aria-label="Link to Linkedin">
                <FiLinkedin />
              </a>
            </Link>
            <Link href={'https://github.com/Majkl45'} legacyBehavior>
              <a className="transition ease-in hover:text-green hover:scale-105" target="_blank" aria-label="Link to GitHub">
                <FiGithub />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex w-[190px] h-[190px] md:w-[300px] md:h-[300px] transition ease-in-out hover:scale-105">
          <Image
          className="border-4 rounded-full border-transparent bg-clip-border bg-gradient-to-r from-green to-blue"
          src={profilePic}
          alt="portfolio-img"
          width={430}
          height={430}
          priority
          style={{
            objectFit: "cover",
            borderRadius: "100%",
          }}/>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;