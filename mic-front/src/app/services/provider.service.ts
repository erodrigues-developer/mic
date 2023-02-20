import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Provider } from '../interfaces/mic/provider/provider'
import { ProviderCollection } from '../interfaces/mic/provider/providerCollection'
import { ProviderItem } from '../interfaces/mic/provider/providerItem'

const ENDPOINT: string = '/providers'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private headers: HttpHeaders = new HttpHeaders({})

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  getCollection(params: HttpParams) {
    return this.http.get<ProviderCollection>(environment.apiUrl + ENDPOINT, { params: params, headers: this.headers })
  }

  getItem(id: string) {
    return this.http.get<ProviderItem>(environment.apiUrl + ENDPOINT + `/${id}`, { headers: this.headers })
  }

  postItem(data: Provider) {
    return this.http.post<ProviderItem>(environment.apiUrl + ENDPOINT, data, { headers: this.headers })
  }

  patchItem(id: string, data: Provider) {
    return this.http.put<ProviderItem>(environment.apiUrl + ENDPOINT + `/${id}`, data, { headers: this.headers })
  }

  deleteItem(id: string) {
    return this.http.delete(environment.apiUrl + ENDPOINT + `/${id}`, { headers: this.headers })
  }
}
