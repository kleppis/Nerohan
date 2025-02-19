import { FaArrowDown } from "react-icons/fa";
import { ulikeTjenester } from "../../constants/tjenester";
import { Container } from "../misc/container";

const TjenesteSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {ulikeTjenester.map((tjeneste) => (
        <Container>
          <img src="/assets/totalenterprise.jpg" alt="" />
          <h2 className="mt-2">{tjeneste.title}</h2>
          <p>{tjeneste.shortDescription}</p>
        </Container>
      ))}
    </div>
  );
};

export default TjenesteSection;
