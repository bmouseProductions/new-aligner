import Hero from "../../assets/img/newaligner.webp";
import { useEffect, useState, useRef } from "react";

export const SectionTres = () => {
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
    <div className="gradient-branco grid grid-cols-1 lg:grid-cols-2 text-800  lg:ps-20 2xl:ps-40">
      <div className="grid-cols-12 lg:grid-cols-6  p-6 text-left flex items-center">
        <div className="flex flex-col gap-3 xl:gap-5 ">
          <h1 className="text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl  font-bold mb-1">
            Como faço para me tornar um credenciado New Aligner?
          </h1>

          <ul className="flex flex-col gap-5">
            <li>
              <h1 className="font-bold">1º Passo: Envie seus dados.</h1> Envie
              uma mensagem para a New Aligner no menu "Contato";
            </li>
            <li>
              <h1 className="font-bold">2º Passo:Pagamento</h1> Após se inteirar
              de 100% dos detalhes e enviar seus dados, realize o pagamento em
              nossa plataforma;
            </li>{" "}
            <li>
              <h1 className="font-bold">
                Agora você é um New Aligner Expert!{" "}
              </h1>
              Agora você faz parte do grupo de profissionais que decidiram
              revolucionar suas rotinas clínicas com a Ortodontia Digital. O
              acesso às aulas aulas online já estará liberado para você.
            </li>
          </ul>
          <div className="w-full lg:w-4/12 flex items-start justify-start ">
            <button className="bg-slate-700"></button>
          </div>
        </div>
      </div>
      <div className="grid-cols-12 lg:grid-col-6 overflow-hidden">
        <div ref={observerRef}>
          {isIntersecting && (
            <img
              src={Hero}
              alt="hero-1"
              className=" block w-full h-full polygon   lg:w-[100%]"
            />
          )}
        </div>
      </div>
    </div>
  );
};
