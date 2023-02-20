import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ZipcodeItem } from '../interfaces/mic/zipcodeItem'

const ENDPOINT = '/zipcodes'

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {

  private headers: HttpHeaders = new HttpHeaders({})

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  getZipCode(zipCode: string) {
    return this.http.get<ZipcodeItem>(environment.apiUrl + ENDPOINT, { params: { zipcode: zipCode }, headers: this.headers })
  }
}
