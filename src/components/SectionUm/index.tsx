import { Button } from "../Button";

export const SectionUm = () => {
  return (
    <div className=" text-black p-10  flex flex-col items-center gap-10  md:px-20 md:py-10 lg:justify-between lg:px-28 xl:px-52 xl:py-20">
      <h1 className=" white text-center text-4xl font-bold   md:text-5xl xl:text-6xl  2xl:text-7xl">
        Você pode ganhar até <span className="text-[#004fab]">5 vezes</span>{" "}
        mais com o <span className="text-[#004fab]">New Aligner</span>
      </h1>

      <iframe
        className="shadow-2xl border-8 border-[#004fab] shadow-[#004fab] rounded-3xl md:w-[560px] md:h-[315px]  2xl:w-[800px] 2xl:h-[420px]"
        src="https://www.youtube.com/embed/CusX3r5Lgl0"
        title="YouTube video player"
      ></iframe>
      <Button></Button>
    </div>
  );
};

/* w-[90%] h-[200px]  xl:w-[560px] xl:h-[315px] 2xl:w-[760px] 2xl:h-[415px] */

/* min-w-[340px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[80vw] lg:h-[450px] xl:w-[560px] xl:h-[315px]   */

/* lg:w-[50vw] xl:w-[60vw] */
