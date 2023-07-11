import banner from "../../assets/img/img_sobre_site_new-_1_.webp";

export const Banner = () => {
  return (
    <div className="bg-white bg-opacity-50 backdrop-blur-md  transition-all duration-300  text-black flex flex-col w-full h-full  p-3 lg:justify-center md:p-10 xl:p-20 2xl:px-52">
      <div className="flex items-center flex-col lg:flex-row lg:justify-between mt-10 lg:mt-20 gap-14">
        <div className="flex flex-col text-black gap-5 flex-1 px-3">
          <h1 className="text-3xl lg:text-4xl 2xl:text-6xl text-[#004fab]">
            Ser um credenciado é ser New Aligner Expert!
          </h1>
          <p className="text-lg 2xl:text-xl">
            Tudo necessário para abrir as portas do seu consultório para a
            Ortodontia Digital está aqui, no credenciamento para se tornar um
            New Aligner Expert!{" "}
          </p>
          <p className="text-lg 2xl:text-xl">
            {" "}
            Ser um doutor New Aligner Expert não é apenas um título, significa
            ser parte de um importante movimento de democratização do acesso à
            Ortodontia Digital, a tranquilidade de estar amparado por
            profissionais capacitados e um Planning Center próprio, ao oferecer
            o tratamento com alinhadores para seus pacientes.
          </p>
          <p className="text-lg 2xl:text-xl">
            Nós da New Aligner não queremos apenas vender um produto, queremos
            firmar uma parceria. Descendo a página vamos mostrar vantagens,
            diferenciais, procedimentos e muito mais do nosso produto, e o
            porque você pode se sentir seguro em iniciar sua jornada conosco.
          </p>
        </div>
        <div className=" mt-10 lg:mt-0 flex items-center justify-center lg:justify-end">
          <img src={banner} alt="" className="w-[60%] lg:w-full" />
        </div>
      </div>
    </div>
  );
};

/* w-[60%] m-auto lg:m-0 lg:w-[50%]  */
