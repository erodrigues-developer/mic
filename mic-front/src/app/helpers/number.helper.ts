import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class NumberHelper {
  currencyToFloat(currency: any) {
    return currency.replace('R$ ', '').replace(/[.]/g, '').replace(/[,]/g, '.')
  }
}