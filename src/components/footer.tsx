import { FooterLink } from "./footer-link";

const Footer = () => {
  return (
    <footer className=" mx-auto py-10 bg-text">
      <div className="max-w-7xl mx-auto text-white flex justify-between">
        <div className="flex flex-col space-y-2">
          <FooterLink title="jorgenklepp@outlook.com" href="mailto:" />
          <FooterLink title="+47 934 41 227" href="mailto:" />
        </div>
        <div>
          <a href="hover:">
            <img src="/assets/long_hvit.svg" alt="" className="w-36" />
          </a>
          <p className="text-center text-white">Powered by</p>
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
