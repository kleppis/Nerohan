import { ulikeTjenester } from "../pages/tjenester/tjenester";
import { LinkButton } from "./misc/link";

export const TilbyrOgså = () => {
  return (
    <div className="md:mb-spacerMd">
      <ul className="flex flex-col">
        {Object.values(ulikeTjenester).map((tjeneste) => (
          <LinkButton href={tjeneste.href} title={tjeneste.title} />
        ))}
      </ul>
    </div>
  );
};
