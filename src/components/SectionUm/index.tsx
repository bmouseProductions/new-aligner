export const SectionUm = () => {
  return (
    <div className="gradient-branco px-3 py-10 flex flex-col items-center gap-10 shadow-2xl lg:flex-row lg:justify-between md:px-20 md:py-10 xl:px-52 xl:py-20 ">
      <h1 className=" text-black text-center text-4xl  font-bold md:text-center lg:text-left xl:text-7xl xl:w-[70%] ">
        Você pode ganhar até <span className="text-[#004fab]">5 vezes</span>{" "}
        mais com o <span className="text-[#004fab]">New Aligner</span>
      </h1>
      <div className="shadow-2xl rounded-3xl">
        <iframe
          className="rounded-3xl shadow-2xl w-[380px] h-[200px]  xl:w-[760px] xl:h-[415px]"
          src="https://www.youtube.com/embed/CusX3r5Lgl0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};
