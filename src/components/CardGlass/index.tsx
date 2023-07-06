interface cardGlass {
  title: string;
  text: string;
}

export const CardGlass = ({ title, text }: cardGlass) => {
  return (
    <div className="container shadow-2xl rounded-xl">
      <div className="box">
        <span className="title ">{title}</span>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
