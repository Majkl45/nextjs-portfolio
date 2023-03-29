import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return ( 
    <footer className="w-full p-5 bg-background-secondary mt-20 flex flex-row justify-center items-center md:justify-around gap-2 font-bold">
      <h4 className="text-green"> &copy; 2023 Michael Rohm</h4>
      <div className="flex gap-2">
        <Link href={'https://www.linkedin.com/in/michael-rohm-b86509259/'} legacyBehavior>
          <a className="cursor-pointer md:text-xl transition ease-in hover:text-green hover:scale-105" target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://github.com/Majkl45'} legacyBehavior>
          <a className="cursor-pointer md:text-xl transition ease-in hover:text-green hover:scale-105" target="_blank" aria-label="Link to GitHub">
            <FiGithub />
          </a>
        </Link>
      </div>

    </footer>
  );
}
 
export default Footer;