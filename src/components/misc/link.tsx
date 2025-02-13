import { FaArrowRight } from "react-icons/fa";

interface LinkProps {
  href: string;
  title: string;
}

export const LinkButton: React.FC<LinkProps> = ({ href, title }) => {
  return (
    <a className="uppercase text-3xl flex group/link btn" href={href}>
      {title}
      <FaArrowRight className="group-hover/link:animate-bounce-x mt-[3px]" />
    </a>
  );
};
