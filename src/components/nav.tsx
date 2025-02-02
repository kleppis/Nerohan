export const Nav = () => {
  return (
    <>
      <nav className="bg-text ">
        <div className="py-10 mx-24 flex justify-between items-center max-w-7xl mx-auto">
          <a href="/">
            <img src="/assets/nero.svg" alt="" className="w-28" />
          </a>
          <div className="space-x-10">
            <a href="" className="text-white">
              Hjem
            </a>
            <a href="" className="text-white">
              Prosjekter
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
