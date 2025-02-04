import { Nav } from "../components/nav";

const Prosjekter = () => {
  return (
    <>
      <Nav />
      <img
        src="/assets/makita.jpg"
        alt=""
        className="w-full mx-auto h-[50vh] object-cover -translate-y-24"
      />
      <div className="max-w-7xl mx-auto py-3">
        <button>Silurveien 323</button>
        <button>Andersensgate 345</button>
      </div>
    </>
  );
};

export default Prosjekter;
