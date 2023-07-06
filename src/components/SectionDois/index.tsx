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
    <div className="p-3 py-10  flex flex-col gap-10 items-center justify-center lg:px-52 lg:py-20">
      <div className="text-center text-black flex flex-col gap-5 lg:w-[70%]">
        <h1 className="text-3xl lg:text-5xl ">
          O que é, e o que eu ganho me tornando um New Aligner Expert?
        </h1>
        <p className="text-xl">
          Para começar a utilizar os alinhadores New Aligner no seu dia a dia
          clínico, é necessário primeiro passar pelo nosso credenciamento que
          conta com inúmeras vantagens para você profissional, desde como lidar
          com os alinhadores em nível técnico até como abordar os pacientes que
          buscam um tratamento mais moderno.
        </p>
        <h1 className="text-lg font-semibold border-2 rounded-full p-2 lg:w-[30%] m-auto">
          Só o New Aligner Expert tem
        </h1>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 lg:w-full">
        {infos.map((item, index) => {
          return <CardGlass key={index} title={item.title} text={item.text} />;
        })}
      </div>
    </div>
  );
};
