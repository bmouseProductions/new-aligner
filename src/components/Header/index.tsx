import Logo from "../../assets/img/newaligner__horz_mini1_1.png";

const Header: React.FC = () => {
  return (
    <div className="px-7 py-5 lg:px-52 lg:py-0">
      <img src={Logo} alt="" className="w-[50%] lg:w-[250px]" />
    </div>
  );
};

export default Header;
