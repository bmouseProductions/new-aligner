import Logo from "../../assets/img/newaligner__horz_mini1_1.webp";

const Header: React.FC = () => {
  return (
    <div className="p-6 flex items-start justify-start ">
      <img src={Logo} alt="" className="w-[150px]lg:max-[250px]:" />
    </div>
  );
};

export default Header;

/* w-[50%] md:w-[25%] lg:w-[20%] xl:[10%]  2xl:w-[220px] */
