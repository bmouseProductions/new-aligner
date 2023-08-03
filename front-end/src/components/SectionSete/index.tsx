import { Button } from "../Button";

export const SectionSete = () => {
  return (
    <div className="fundo-section-sete shadow-2xl">
      <div className="destaque-texto flex items-center justify-start ">
        <div className="flex flex-col gap-10  md:px-10 md:w-[75%]  lg:px-20 lg:w-[72%]   2xl:px-30 xl:w-[75%]   2xl:px-52 2xl:w-[65%] ">
          <h1 className="text-3xl text-center md:text-4xl lg:text-5xl lg:text-left  2xl:text-6xl">
            Com muito orgulho, somos uma empresa 100% nacional!
          </h1>
          <div className="m-auto md:m-0">
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
