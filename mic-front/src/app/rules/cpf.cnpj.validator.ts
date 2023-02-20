import { AbstractControl, Validators } from "@angular/forms"
import { cpf, cnpj } from 'cpf-cnpj-validator'

export class CpfCnpjValidator {
  constructor () { }

  static isValid() {
    return (control: AbstractControl): Validators => {
      const value = control.value

      if (!cpf.isValid(value) && value && value.length <= 11) {
        return {
          cpfNotValid: true
        }
      }

      if (!cnpj.isValid(value) && value && value.length > 11) {
        return {
          cnpjNotValid: true
        }
      }

      return {}
    }
  }
}