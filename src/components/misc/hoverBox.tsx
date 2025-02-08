interface HoverBoxProps {
  href?: string;
}

export const HoverBox: React.FC<HoverBoxProps> = ({ href }) => {
  return (
    <a href={href}>
      <div className="absolute top-0 w-0 h-full bg-white opacity-40 group-hover/link:w-[120%] transition-all duration-500 py-[10%] z-10"></div>
    </a>
  );
};

export const HoverBoxBlue: React.FC<HoverBoxProps> = ({ href }) => {
  return (
    <a href={href}>
      <div className="absolute top-0 w-0 h-full bg-text opacity-40 group-hover/link:w-full transition-all duration-500"></div>
    </a>
  );
};
