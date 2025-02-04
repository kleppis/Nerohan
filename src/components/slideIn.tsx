import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible(true);
      }, delay);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 h-fit ${
        visible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default SlideIn;
