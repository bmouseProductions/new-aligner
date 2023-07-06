export const SectionUm = () => {
  return (
    <div className="gradient-branco px-3 py-10 flex flex-col items-center gap-10 shadow-2xl lg:flex-row lg:justify-between lg:px-52 lg:py-20 ">
      <h1 className=" text-black text-center text-4xl  font-bold lg:text-7xl lg:w-[70%] lg:text-left">
        Você pode ganhar até <span className="text-[#004fab]">5 vezes</span>{" "}
        mais com o <span className="text-[#004fab]">New Aligner</span>
      </h1>
      <div className="shadow-2xl rounded-3xl">
        <iframe
          className="rounded-3xl shadow-2xl w-[380px] h-[200px] lg:w-[760px] lg:h-[415px]"
          src="https://www.youtube.com/embed/CusX3r5Lgl0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};
