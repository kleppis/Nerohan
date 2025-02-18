import { FaArrowDown } from "react-icons/fa";
import { ulikeTjenester } from "../../constants/tjenester";
import { Container } from "../misc/container";

const TjenesteSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {ulikeTjenester.map((tjeneste) => (
        <Container>
          <p className="text-center">Prosjektering</p>
          <FaArrowDown className="text-text mx-auto" />
          <p className="text-center">Utførelse</p>
          <h2>{tjeneste.title}</h2>
        </Container>
      ))}
    </div>
  );
};

export default TjenesteSection;
