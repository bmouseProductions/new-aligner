/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios"

export const api = axios.create({
  baseURL: "https://backend-new-aligner.onrender.com/"
})

interface propsFormData {
  nome: string;
  telefone: string;
  email: string;
}

export const enviarEmail = async (formData: propsFormData) => {
  const { nome, telefone, email } = formData;

  const dataToSend = {
    nome,
    telefone,
    email
  }
  try {
    const response = await api.post("/send", dataToSend)
    return response.data
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-member-access
    throw new Error("Erro" + error.message)
  }
}