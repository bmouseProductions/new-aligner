import { CardGlass } from "../CardGlass";

const infos = [
  {
    title: "De Ortodontistas para profissionais",
    text: "Trabalhe com uma ferramenta criada por Ortodontistas que entendem cada detalhe do seu dia a dia clínico.",
  },
  {
    title: "Suporte clínico diferenciado",
    text: "Esteja amparado(a) por um suporte formado 100% por ortodontistas.",
  },
  {
    title: "Excelente rentabilidade",
    text: "Acesso a melhor tecnologia de alinhamento ortodôntico por um preço justo e competitivo.",
  },

  {
    title: "Monitoramento remoto dos casos",
    text: "Somos pioneiros no Brasil a oferecer esse serviço que facilita tanto a vida do profissional quanto do paciente, tudo via plataforma New Aligner.",
  },

  {
    title: "TOHi - Tratamento Ortodôntico Híbrido",
    text: "Inicie o tratamento com aparelho autoligado estético e finalize com alinhadores. Tudo guiado desde o início pelo Planning Center New Aligner.",
  },
  {
    title: "Diferencial estratégico",
    text: "Adote a Ortodontia Digital nos protocolos da sua clínica e mostre para seus pacientes que você trabalha com o que há de mais moderno no seu ramo.",
  },

  {
    title: "Todo material que você precisa",
    text: "Receba um kit de materiais completo para começar com o New Aligner em sua clínica ou consultório, descubra mais detalhes descendo a página!",
  },
];

export const SectionDois = () => {
  return (
    <div className=" pb-10  flex flex-col gap-10 items-center justify-center">
      <div className=" flex flex-col gap-5  bg-white bg-opacity-50 backdrop-blur-md  transition-all duration-300 text-center  p-10 text-black w-full md:pb-10 lg:p-20 xl:px-30  xl:py-20 2xl:px-52 ">
        <h1 className="text-3xl md:text-4xl xl:text-5xl lg:w-[70%] m-auto">
          O que é, e o que eu ganho me tornando um New Aligner Expert?
        </h1>
        <p className="xl:text-xl lg:w-[70%] m-auto">
          Para começar a utilizar os alinhadores New Aligner no seu dia a dia
          clínico, é necessário primeiro passar pelo nosso credenciamento que
          conta com inúmeras vantagens para você profissional, desde como lidar
          com os alinhadores em nível técnico até como abordar os pacientes que
          buscam um tratamento mais moderno.
        </p>
        <h1 className="text-base font-semibold border-2 rounded-full p-3 2xl:w-[30%] m-auto">
          Só o New Aligner Expert tem
        </h1>
      </div>
      <div className="p-3 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 ">
        {infos.map((item, index) => {
          return <CardGlass key={index} title={item.title} text={item.text} />;
        })}
      </div>
    </div>
  );
};
