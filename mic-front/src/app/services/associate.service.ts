import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Associate } from '../interfaces/mic/associate/associate'
import { AssociateCollection } from '../interfaces/mic/associate/associateCollection'
import { AssociateItem } from '../interfaces/mic/associate/associateItem'

const ENDPOINT: string = '/associates'

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  private headers: HttpHeaders = new HttpHeaders({})

  constructor(
    private http: HttpClient,
  ) {
    let token: string = sessionStorage.getItem('token') ?? ''
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
  }

  getCollection(params: HttpParams) {
    return this.http.get<AssociateCollection>(environment.apiUrl + ENDPOINT, { params: params, headers: this.headers })
  }

  getItem(id: string) {
    return this.http.get<AssociateItem>(environment.apiUrl + ENDPOINT + `/${id}`, { headers: this.headers })
  }

  postItem(data: Associate) {
    return this.http.post<AssociateItem>(environment.apiUrl + ENDPOINT, data, { headers: this.headers })
  }

  patchItem(id: string, data: Associate) {
    return this.http.put<AssociateItem>(environment.apiUrl + ENDPOINT + `/${id}`, data, { headers: this.headers })
  }

  deleteItem(id: string) {
    return this.http.delete(environment.apiUrl + ENDPOINT + `/${id}`, { headers: this.headers })
  }
}
