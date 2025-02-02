import { HomeLink } from "../components/homeLink";
import { Nav } from "../components/nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen max-w-7xl mx-auto">
        <ul className="flex-col flex py-24 space-y-10">
          <HomeLink title="Prosjekter" href="/prosjekter" />
          <HomeLink title="Om Meg" href="/prosjekter" />
        </ul>
      </div>
    </>
  );
};

export default Home;
