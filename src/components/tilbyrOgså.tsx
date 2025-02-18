import { LinkButton } from "./misc/link";
import { ulikeTjenester } from "../constants/tjenester";

interface TilbyrOgsåProps {
  thisSite: string;
}

export const TilbyrOgså = ({ thisSite }: TilbyrOgsåProps) => {
  return (
    <div className="md:mb-spacerMd">
      <ul className="flex flex-col">
        {Object.values(ulikeTjenester).map((tjeneste) => {
          if (tjeneste.title === thisSite) {
            return null;
          }
          return <LinkButton href={tjeneste.href} title={tjeneste.title} />;
        })}
      </ul>
    </div>
  );
};
