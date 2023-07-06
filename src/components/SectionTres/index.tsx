import Hero from "../../assets/img/newaligner.webp";

export const SectionTres = () => {
  return (
    <div className="gradient-branco grid grid-cols-1 md:grid-cols-2 text-800  lg:ps-40  shadow-2xl">
      <div className="grid-cols-12 md:grid-cols-6  p-6 text-left flex items-center">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-3xl lg:text-5xl  font-bold mb-1">
            Como faço para me tornar um credenciado New Aligner?
          </h1>

          <ul className="flex flex-col gap-5   ">
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
      <div className="grid-cols-12 md:grid-col-6 overflow-hidden">
        <img
          src={Hero}
          alt="hero-1"
          className="md:ml-auto block h-full polygon"
        />
      </div>
    </div>
  );
};
