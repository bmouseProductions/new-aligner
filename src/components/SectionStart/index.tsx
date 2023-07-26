import { Button } from "../Button";
import { CardGlass } from "../CardGlass";

const infos = [
  {
    title: "Macromodelo New Aligner",
    text: "Objeto importante para fechar venda. Mostre além da teoria como é, fisicamente, o New Aligner para seu paciente. Disponível apenas no Kit Start",
  },
];

export const SectionStart = () => {
  return (
    <div className=" pb-10 flex flex-col gap-5 items-center justify-center ">
      <div className=" flex flex-col gap-5 p-5 w-full text-center text-black md:pb-10 lg:px-20 lg:py-20  2xl:px-52 2xl:py-20 ">
        <h1 className="text-3xl md:text-4xl xl:text-5xl">
          Você também pode adquirir separadamente o Kit Start
        </h1>
        <p className="text-xl">
          Ao realizar a compra do seu primeiro caso, você ganha o Kit Marketing,
          que tem tudo que você precisa para iniciar sua jornada. Confira o que
          estará disponível para você:
        </p>
      </div>
      <div className="p-3">
        {infos.map((item, index) => {
          return <CardGlass key={index} title={item.title} text={item.text} />;
        })}
      </div>
      <Button></Button>
    </div>
  );
};
