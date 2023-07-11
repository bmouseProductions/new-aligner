import { useEffect, useState, useRef } from "react";

export const SectionSete = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerRef = useRef(null);

  useEffect(() => {
    const observerNode = observerRef.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, observerOptions);

    if (observerNode) observer.observe(observerNode);

    return () => {
      if (observerNode) observer.unobserve(observerNode);
    };
  }, []);

  return (
    <div ref={observerRef}>
      {isIntersecting && (
        <div className="fundo-section-sete shadow-2xl">
          <div className="destaque-texto flex items-center justify-start ">
            <h1 className="text-3xl text-center md:text-4xl md:px-10 md:w-[75%] lg:text-5xl lg:px-20 lg:w-[72%] lg:text-left l 2xl:px-30 xl:w-[75%]   2xl:text-6xl 2xl:px-52 2xl:w-[65%] ">
              Com muito orgulho, somos uma empresa 100% nacional!
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
