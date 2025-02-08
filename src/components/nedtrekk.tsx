import { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

interface NedtrekkProps {
  title: string;
  children: React.ReactNode;
}

const Nedtrekk: React.FC<NedtrekkProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <h2
        onClick={() => setOpen(!open)}
        className=" transition-all hover:cursor-pointer flex items-center"
      >
        {title}
        <div
          className={
            open ? "transition-all transform rotate-180" : "transition-all"
          }
        >
          <TiArrowSortedUp />
        </div>
      </h2>

      <div
        className={`mt-4 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Nedtrekk;
