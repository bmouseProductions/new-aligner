import banner from "../../assets/img/img_sobre_site_new.png";
import Header from "../Header";

export const Banner = () => {
  return (
    <div className="flex flex-col lg:h-screen lg:justify-evenly ">
      <Header></Header>
      <div className="flex items-center flex-col lg:flex-row lg:justify-between  ">
        <div className="destaque  flex flex-col text-black gap-5 flex-1 px-3 lg:px-52 lg:rounded-e-2xl">
          <h1 className="text-3xl lg:text-6xl">
            Ser um credenciado é ser New Aligner Expert!
          </h1>
          <p className="text-lg lg:text-xl">
            Tudo necessário para abrir as portas do seu consultório para a
            Ortodontia Digital está aqui, no credenciamento para se tornar um
            New Aligner Expert!{" "}
          </p>
          <p className="text-lg lg:text-xl">
            {" "}
            Ser um doutor New Aligner Expert não é apenas um título, significa
            ser parte de um importante movimento de democratização do acesso à
            Ortodontia Digital, a tranquilidade de estar amparado por
            profissionais capacitados e um Planning Center próprio, ao oferecer
            o tratamento com alinhadores para seus pacientes.
          </p>
          <p className="text-lg lg:text-xl">
            Nós da New Aligner não queremos apenas vender um produto, queremos
            firmar uma parceria. Descendo a página vamos mostrar vantagens,
            diferenciais, procedimentos e muito mais do nosso produto, e o
            porque você pode se sentir seguro em iniciar sua jornada conosco.
          </p>
        </div>
        <div className="flex-1  flex items-center justify-center">
          <img
            src={banner}
            alt=""
            className="w-[60%] m-auto lg:m-0 lg:w-[50%] "
          />
        </div>
      </div>
    </div>
  );
};
