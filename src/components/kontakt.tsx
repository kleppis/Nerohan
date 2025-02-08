import { IoIosMail } from "react-icons/io";
import { HoverBox } from "./misc/hoverBox";

const Kontakt = () => {
  return (
    <div className="p-6 border border-text rounded-xl w-fit h-fit">
      <h3>Kontakt</h3>
      <p>+47 934 41 227</p>
      <p>contact@kleppanit.no</p>
      <a
        href="mailto:contact@kleppanit.no"
        className="font-walter-turncoat flex items-center relative group/link cursor-pointer"
      >
        Send mail
        <div className="">
          <IoIosMail className="ms-4 inline" />
        </div>
        <HoverBox />
      </a>
    </div>
  );
};

export default Kontakt;
