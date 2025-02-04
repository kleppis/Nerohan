import { FooterLink } from "./footer-link";

const Footer = () => {
  return (
    <footer className=" mx-auto py-10 bg-text px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto text-white flex justify-between">
        <div className="flex flex-col">
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
        <div className="flex flex-col space-y-2">
          <FooterLink title="jorgenklepp@outlook.com" href="mailto:" />
          <FooterLink title="+47 934 41 227" href="mailto:" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
