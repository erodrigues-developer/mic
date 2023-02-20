export class BaseComponent {
    requiredMessage: string = 'Preenchimento obrigatório'
    maxMessage: string = 'Maior do que o valor mínimo permitido'
    minMessage: string = 'Menor do que o valor mínimo permitido'
    maxLengthMessage: string = 'Número de caracteres não pode exceder '
    cpfNotValidMessage: string = 'O número do CPF é inválido'
    cnpjNotValidMessage: string = 'O número do CNPJ é inválido'
    emailMessage: string = 'Email inválido'
    urlMessage: string = 'URL inválida'
    labelCreatedAt: string = 'Data de Criação'

    constructor() { 
    }
}