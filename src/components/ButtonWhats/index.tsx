import { AiOutlineWhatsApp } from "react-icons/ai";

export const ButtonWhats = () => {
  return (
    <a
      className="fixed bottom-2 left-2 bg-[#34af23] p-3 rounded-full shadow-2xl hover:opacity-90 z-50"
      href="#"
      aria-description="Botão WhatsApp"
    >
      <AiOutlineWhatsApp size={20} className="text-white"></AiOutlineWhatsApp>
    </a>
  );
};
