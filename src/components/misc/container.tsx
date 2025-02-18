interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="relative">
        <div className=" shadow-lg shadow-slate-400 h-full  rounded-lg mx-auto p-4 overflow-hidden group/container">
          <div className="group-hover/container:scale-110 transition-all duration-500">
            {children}
          </div>
        </div>
        <div className="bg-black align-center opacity-0 rounded-lg absolute top-0 w-full h-full hover:opacity-80 transition-all duration-500 flex items-center">
          <p className="items-center text-white text-center w-full text-xl uppercase">
            Les mer
          </p>
        </div>
      </div>
    </>
  );
};
