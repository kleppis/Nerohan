import { useState, useRef, useEffect } from "react";
import { Nav } from "../components/nav";
import ProsjektLayout from "../components/prosjekt-komponenter/prosjektLayout";

const Prosjekter = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  useEffect(() => {
    if (activeButton !== null && buttonsRef.current[activeButton]) {
      const button = buttonsRef.current[activeButton];
      setUnderlineStyle({
        width: button.offsetWidth,
        left: button.offsetLeft,
      });
    }
  }, [activeButton]);

  const renderContent = () => {
    switch (activeButton) {
      case 0:
        return <ProsjektLayout />;
      case 1:
        return <div>Innhold for Silurveien 324</div>;
      case 2:
        return <div>Innhold for Silurveien 325</div>;
      default:
        return <div>Velg et prosjekt for å se detaljer</div>;
    }
  };

  return (
    <>
      <Nav />
      <div>
        <img
          src="/assets/makita.jpg"
          alt=""
          className="w-full mx-auto h-[50vh] object-cover -translate-y-24"
        />
        <h1 className="absolute top-2 left-[50%]">Prosjekter</h1>
      </div>
      <div className="max-w-7xl mx-auto py-3">
        <div className="relative flex space-x-4">
          {["Silurveien 323", "Silurveien 324", "Silurveien 325"].map(
            (button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                ref={(el) => (buttonsRef.current[index] = el)}
                className="relative w-1/3 text-2xl text-text uppercase py-3 "
              >
                {button}
              </button>
            )
          )}
          <div
            className="absolute bottom-0 h-1 bg-text transition-all duration-300"
            style={underlineStyle}
          ></div>
        </div>
        <div className="mt-10">{renderContent()}</div>
      </div>
    </>
  );
};

export default Prosjekter;
