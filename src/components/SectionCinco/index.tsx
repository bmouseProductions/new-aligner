import Hero from "../../assets/img/woman-sitting-desk.webp";
import { useEffect, useState, useRef } from "react";

export const SectionCinco = () => {
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
    <div className="gradient-branco grid grid-cols-1 lg:grid-cols-2 text-800 lg:pe-20 2xl:pe-40 shadow-2xl ">
      <div className="grid-cols-12 lg:grid-cols-6 overflow-hidden">
        <div ref={observerRef}>
          {isIntersecting && (
            <img
              src={Hero}
              alt="hero-1"
              className=" block h-full w-full polygon-ivertido lg:w-[100%]"
            />
          )}
        </div>
      </div>
      <div className="grid-cols-12 lg:grid-cols-6  p-6 flex items-center">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1">
            O que é esse tal de New Aligner Academy?
          </h1>

          <p className="text-lg">
            O New Aligner Academy é nossa divisão de aprendizagem, liderada pelo
            professor Dr. Vicente Pacheco. Assista todas as aulas online para
            saber cada detalhe sobre o tratamento com alinhadores, e acesse de
            onde e quantas vezes quiser sempre que surgir uma dúvida. Um
            material completo com mais de 10 horas de conteúdo e expertise de
            mestres em ortodontia.
          </p>
          <div className="w-full lg:w-4/12 flex items-start justify-start">
            <button className="bg-slate-700"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
