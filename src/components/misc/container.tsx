interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" border-text border-2 rounded-lg mx-auto p-4 overflow-hidden group/container">
      <div className="group-hover/container:scale-110 transition-all duration-500">
        {children}
      </div>
    </div>
  );
};
