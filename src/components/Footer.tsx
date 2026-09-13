import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto border border-dotted border-slate-400 my-12 rounded-xl">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
        <aside>
          <img src={logo} alt="Brand logo" />
          <p>
            Curated tools, technologies, and resources for developers building <br />
            modern software.
          </p>
          <ul className="flex gap-4 font-semibold mt-3">
            <li><a href="">GitHub</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">LinkedIn</a></li>
          </ul>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Services</a>
        </nav>
      </footer>
      <div className="flex justify-between items-center px-10 my-10">
        <h1 className="flex items-center text-slate-500"><FaRegCopyright className="inline mr-1" /> 2026 DevStack. All rights reserved</h1>
        <ul className="flex gap-4">
            <li className="link link-hover"><a href="">Privecy</a></li>
            <li className="link link-hover"><a href="">Terms</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
