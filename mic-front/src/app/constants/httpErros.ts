import { StatusMessage } from "../interfaces/mic/statusMessage";

export const STATUS_MESSAGE: StatusMessage = {
  400: 'Ocorreu uma falha na sua requisição, tente novamente.',
  401: 'Login e senha inválidos.',
  403: 'Você não está autorizado a usar este serviço.',
  404: 'Não encontrado.',
  422: 'Houve falha na validação dos campos.',
  500: 'Ocorreu um erro inesperado, já estamos trabalhando para resolver.',
}
