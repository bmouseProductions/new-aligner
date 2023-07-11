import { BsWhatsapp } from "react-icons/bs";

export const ButtonWhats = () => {
  return (
    <a
      className="fixed bottom-2 left-2 bg-[#34af23] p-2 md:p-4 rounded-full shadow-2xl hover:opacity-90 z-10"
      href="https://api.whatsapp.com/send?phone=5513997289237&text=Gostaria%20de%20falar%20com%20um%20consultor"
      target="_blank"
    >
      <BsWhatsapp className="text-white w-20px  md:w-[30px]"></BsWhatsapp>
    </a>
  );
};
