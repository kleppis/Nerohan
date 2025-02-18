import { HoverBoxBlue } from "../misc/hoverBox";

interface FooterLinkProps {
  title: string;
  href: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className="text-white text-base font-walter-turncoat group/link relative opacity-65"
    >
      {title}
      <HoverBoxBlue />
    </a>
  );
};
