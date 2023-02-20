import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class DateHelper {
  format(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  }

  createDate(date: string | undefined): Date | undefined {
    if (!date) {
      return undefined
    }

    const newDate = new Date()
    const dateSplit = date.split('-')
    const day = parseInt(dateSplit[2] ?? 1)
    const month = parseInt(dateSplit[1] ?? 1)
    const year = parseInt(dateSplit[0] ?? 1980)

    newDate.setDate(day)
    newDate.setMonth(month+1)
    newDate.setFullYear(year)

    return newDate
  }
}