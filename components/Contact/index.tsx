import { FiLinkedin } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="title">Contact</h2>
      <div className="my-10 flex flex-col justify-center items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start items-start text-center p-5 bg-background-secondary rounded-xl">
            <div className="flex flex-row gap-2">
              <FiLinkedin size={22} className="text-green" />
              <h4 className="text-xl font-bold">LinkedIn</h4>
            </div>
            <Link className="font-semibold hover:text-green" href="https://www.linkedin.com/in/michael-rohm-b86509259/" target={"_blank"} rel="noopener noreferrer">
              <span>Michael Rohm</span>
            </Link>
          </div>

          <div className="flex flex-col justify-start items-start text-center p-5  bg-background-secondary rounded-xl">
            <div className="flex flex-row gap-2">
              <BiMailSend size={22} className="text-green" />
              <h4 className="text-xl font-bold">Email</h4>
            </div>
            <Link className="font-semibold hover:text-green" href="mailto:michaelrohm24@gmail.com">
              <span>michaelrohm24@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
