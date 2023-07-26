import { Button } from "../Button";
import { CardGlass } from "../CardGlass";

const infos = [
  {
    title: "Material para ponto de venda",
    text: "Material PDV (ponto de venda) para a recepção da sua clínica ou consultório: display porta flyers, flyers informativos e apresentação de vendas. Disponível no Kit Marketing.",
  },

  {
    title: "Acesso à New Aligner Academy",
    text: "10h+ de conteúdo online para acessar a hora que quiser. Você também conta com lives semanais repleto de dicas clínicas importantes. Disponível no Kit Marketing.",
  },

  {
    title: "Materiais para Marketing Digital",
    text: "Conte com a gente para atrair mais pacientes com artes e vídeos para suas redes sociais. Oferecemos também um banco de imagens próprio. Disponível no Kit Marketing.",
  },

  {
    title: "Apresentação de vendas digital",
    text: "Um arquivo para te ajudar a fechar mais vendas no consultório, mostrando para os pacientes informações de forma clara sobre o tratamento com New Aligner. Disponível no Kit Marketing.",
  },
];

export const SectionQuatro = () => {
  return (
    <div className=" pb-10 flex flex-col gap-10 items-center justify-center ">
      <div className=" flex flex-col gap-5 p-5 w-full text-center text-black md:pb-10 lg:px-20 lg:py-20  2xl:px-52 2xl:py-20 ">
        <h1 className="text-3xl md:text-4xl xl:text-5xl">
          O que tenho direto depois de me tornar um New Aligner Expert?
        </h1>
        <p className="text-xl">
          Ao realizar a compra do seu primeiro caso, você ganha o Kit Marketing,
          que tem tudo que você precisa para iniciar sua jornada. Confira o que
          estará disponível para você:
        </p>
      </div>
      <div className="p-3 grid grid-cols-1  gap-5 lg:grid-cols-2 2xl:grid-cols-4 ">
        {infos.map((item, index) => {
          return <CardGlass key={index} title={item.title} text={item.text} />;
        })}
      </div>
      <Button></Button>
    </div>
  );
};
