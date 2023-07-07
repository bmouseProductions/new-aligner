import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const Forms = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os valores do formulário
    console.log(formData);
    // Limpar os valores após o envio, se necessário
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="flex items-center justify-center py-20 ">
      <form className="form shadow-2xl" onSubmit={handleSubmit}>
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
            name="name"
            id="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            placeholder="Seu melhor e-mail"
            type="email"
            name="email"
            id="email-address"
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder="Seu número de celular"
            type="tel"
            name="phone"
            id="phone"
            className="input"
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit" className="button">
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
