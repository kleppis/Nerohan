import { FaArrowRight } from "react-icons/fa";

interface HomeLinkProps {
  title: string;
  href: string;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ title, href }) => {
  return (
    <a href={href} className="text-text group/link text-7xl">
      {title}
      <FaArrowRight className="inline ml-2 group-hover/link:animate-bounce-x" />
    </a>
  );
};
