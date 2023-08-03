/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api";

interface FormData {
  nome: string;
  telefone: string;
  email: string;
}

export const Forms = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSending(true);
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center py-20 ">
      <form
        onSubmit={handleSubmit}
        className="form shadow-2xl  p-4 w-[100%] md:p-10  md:w-[80%] xl:w-[70%] 2xl:w-[50%]"
      >
        <div>
          <h2 className="title">
            O que está faltando para se tornar um credenciado?
          </h2>
          <p className="description">
            Preencha o formulário ao lado que um de nossos consultores entrará
            em contato para maiores informações o mais breve possível.
          </p>
          <input
            placeholder="Seu nome"
            type="text"
            id="nome"
            className="input"
            onChange={handleChange}
            value={formData.nome}
          />
          <input
            placeholder="Seu melhor e-mail"
            type="email"
            id="email"
            className="input"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            placeholder="Seu número de celular"
            type="tel"
            id="telefone"
            className="input"
            onChange={handleChange}
            value={formData.telefone}
          />
          <button type="submit" className="button" disabled={isSending}>
            Eu quero me credenciar
          </button>
          <p className="description">
            Fique tranquilo, a New Aligner tem compromisso com os seus dados e
            garantimos não utilizar suas informações de contato para enviar
            qualquer tipo de SPAM.
          </p>
        </div>
      </form>
    </div>
  );
};
