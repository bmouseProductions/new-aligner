interface cardGlass {
  title: string;
  text: string;
}

export const CardGlass = ({ title, text }: cardGlass) => {
  return (
    <div className="container shadow-2xl rounded-xl md:w-[80vw] lg:w-[400px]">
      <div className="box md:w-[80vw] lg:w-[400px]">
        <span className="title ">{title}</span>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
