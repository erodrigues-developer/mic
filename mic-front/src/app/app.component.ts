import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MIC'
  hide = true
  email = new FormControl('', [Validators.required, Validators.email])

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Preenchimento obrigatório'
    }

    return this.email.hasError('email') ? 'Email inválido' : ''
  }
}
