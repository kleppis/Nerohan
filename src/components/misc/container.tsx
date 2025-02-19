interface ContainerProps {
  children: React.ReactNode;
  href?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, href }) => {
  return (
    <>
      <a href={href}>
        <div className="relative">
          <div className=" shadow-lg shadow-slate-400 hover:shadow-gray-500 transition-all duration-500 h-full  rounded-lg mx-auto p-4 overflow-hidden group/container cursor-pointer">
            <div className="">{children}</div>
          </div>
        </div>
      </a>
    </>
  );
};
