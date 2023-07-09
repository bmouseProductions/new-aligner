export const SectionUm = () => {
  return (
    <div className="gradient-branco px-3 py-10 flex flex-col items-center gap-10 shadow-2xl md:px-20 md:py-10  lg:justify-between  xl:flex-row xl:px-30 xl:py-20  2xl:px-52">
      <h1 className=" text-black text-center text-4xl  font-bold  xl:text-5xl 2xl:text-left  2xl:text-7xl 2xl:w-[70%] ">
        Você pode ganhar até <span className="text-[#004fab]">5 vezes</span>{" "}
        mais com o <span className="text-[#004fab]">New Aligner</span>
      </h1>
      <div className="shadow-2xl rounded-3xl">
        <iframe
          className="rounded-3xl shadow-2xl w-[100%] h-[200px] md:w-[500px] md:h-[350px] lg:w-[800px] lg:h-[450px]  xl:w-[560px] xl:h-[315px] 2xl:w-[760px] 2xl:h-[415px]"
          src="https://www.youtube.com/embed/CusX3r5Lgl0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

/* w-[90%] h-[200px]  xl:w-[560px] xl:h-[315px] 2xl:w-[760px] 2xl:h-[415px] */
