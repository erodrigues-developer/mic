import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Token } from '../interfaces/mic/login/token'

const ENDPOINT_LOGIN: string = '/login'
const ENDPOINT_LOGOUT: string = '/logout'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }
  
  login(user: string, password: string) {
    return this.http.post<Token>(environment.apiUrl + ENDPOINT_LOGIN, {email: user, password: password})
  }
  
  logout() {
    return this.http.post<void>(environment.apiUrl + ENDPOINT_LOGOUT, {})
  }

}
