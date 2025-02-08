import { FooterLink } from "./footer-link";

const Footer = () => {
  return (
    <footer className=" py-10 bg-text px-5 rounded-lg my-2 mx-4">
      <div className="max-w-7xl mx-auto text-white flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:item-start">
          <p className="text-white text-xl uppercase">Kontakt oss</p>
          <FooterLink title="jorgenklepp@outlook.com" href="mailto:" />
          <FooterLink title="+47 934 41 227" href="mailto:" />
        </div>
        <div className="items-center flex flex-col ">
          <a href="https://kleppanit.no/">
            <img
              src="/assets/long_hvit.svg"
              alt=""
              className="w-36 hover:blur-[3px] transition-all"
            />
          </a>
          <p className="text-center text-white opacity-50">Powered by</p>
        </div>
        <div className="flex flex-col space-y-2 items-center md:item-end">
          <FooterLink title="jorgenklepp@outlook.com" href="mailto:" />
          <FooterLink title="+47 934 41 227" href="mailto:" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
