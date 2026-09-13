import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
      <div className="border border-dotted border-slate-400 rounded-xl overflow-hidden">
        <footer className="bg-base-200 text-base-content p-6 sm:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <aside className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Brand logo" className="w-32 sm:w-36" />

            <p className="mt-4 text-sm sm:text-base leading-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex flex-wrap gap-4 font-semibold mt-4">
              <li>
                <a className="link link-hover">GitHub</a>
              </li>
              <li>
                <a className="link link-hover">Twitter</a>
              </li>
              <li>
                <a className="link link-hover">LinkedIn</a>
              </li>
            </ul>
          </aside>

          <nav>
            <h6 className="footer-title">Product</h6>
            <div className="flex flex-col">
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Technologies</a>
              <a className="link link-hover">Projects</a>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <div className="flex flex-col">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Careers</a>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title">Legal</h6>
            <div className="flex flex-col">
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Terms of Services</a>
            </div>
          </nav>
        </footer>

        <div className="border-t border-slate-300 px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
          <h1 className="flex items-center text-sm sm:text-base text-slate-500 text-center sm:text-left">
            <FaRegCopyright className="mr-1 shrink-0" />
            2026 DevStack. All rights reserved
          </h1>

          <ul className="flex gap-4 text-sm sm:text-base">
            <li className="link link-hover">
              <a>Privacy</a>
            </li>
            <li className="link link-hover">
              <a>Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
