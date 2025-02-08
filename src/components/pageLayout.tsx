interface PageLayoutProps {
  imgUrl: string;
  alt: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ imgUrl, alt, children }) => {
  return (
    <>
      <img
        src={imgUrl}
        alt={alt}
        className="w-full mx-auto h-[50vh] object-cover -mt-24"
      />
      <div className=" max-w-7xl mx-auto  py-14">{children}</div>
    </>
  );
};

export default PageLayout;
