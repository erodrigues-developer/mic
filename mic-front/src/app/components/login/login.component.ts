import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { STATUS_MESSAGE } from 'src/app/constants/httpErros'
import { Token } from 'src/app/interfaces/mic/login/token'
import { LoginService } from 'src/app/services/login.service'
import { ErrorComponent } from '../error/error.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'erp-front'
  hide = true
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])

  constructor(
    public router: Router,
    private service: LoginService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      sessionStorage.clear()
      this.service.logout()
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Preenchimento obrigatório'
    }

    return this.email.hasError('email') ? 'Email inválido' : ''
  }

  login() {
    this.service.login(this.email.value, this.password.value)
      .subscribe((data: Token) => {
        sessionStorage.setItem('token', data.token)
        location.assign('/')
        return
      }, (erro) => {
        let message = STATUS_MESSAGE[erro.status]
        this.showError(message, 'Usuário ou senha incorreta')
      })
  }

  showError(message: string, title: string) {
    this.dialog.open(ErrorComponent, {
      width: '250px',
      data: { message: message, title: title },
    })
  }

}
