import { HoverBoxBlue } from "./hoverBox";

interface FooterLinkProps {
  title: string;
  href: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className="text-white text-xl font-walter-turncoat group/link relative"
    >
      {title}
      <HoverBoxBlue />
    </a>
  );
};
