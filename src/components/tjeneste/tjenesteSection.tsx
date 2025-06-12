import { ulikeTjenester } from "../../constants/tjenester";
import { Container } from "../misc/container";

const TjenesteSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {ulikeTjenester.map((tjeneste) => (
        <Container href={tjeneste.href}>
          <div className="overflow-hidden">
            <img
              src="/assets/totalenterprise.jpg"
              alt=""
              className="shadow-lg group-hover/container:scale-110 transition-all duration-500"
            />
          </div>
          <h2 className="mt-2">{tjeneste.title}</h2>
          <p className="text-gray-500">{tjeneste.shortDescription}</p>
        </Container>
      ))}
    </div>
  );
};

export default TjenesteSection;
