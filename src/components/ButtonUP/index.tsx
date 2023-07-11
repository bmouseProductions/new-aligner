import { AiOutlineArrowUp } from "react-icons/ai";

export const ButtonUP = () => {
  return (
    <a
      className="fixed bottom-2 right-2 bg-[#004fab] p-2 rounded-md shadow-2xl hover:opacity-90 z-10"
      href="#"
    >
      <AiOutlineArrowUp size={20} className="text-white"></AiOutlineArrowUp>
    </a>
  );
};
