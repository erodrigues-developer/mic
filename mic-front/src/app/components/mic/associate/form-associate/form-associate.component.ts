import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { STATUS_MESSAGE } from 'src/app/constants/httpErros';
import { Associate } from 'src/app/interfaces/mic/associate/associate';
import { AssociateItem } from 'src/app/interfaces/mic/associate/associateItem';
import { ZipcodeItem } from 'src/app/interfaces/mic/zipcodeItem';
import { AssociateService } from 'src/app/services/associate.service';
import { MessageService } from 'src/app/services/message.service';
import { ZipCodeService } from 'src/app/services/zip-code.service';

@Component({
  selector: 'app-form-associate',
  templateUrl: './form-associate.component.html',
  styleUrls: ['./form-associate.component.scss']
})
export class FormAssociateComponent extends BaseComponent implements OnInit {

  section: string = 'Cadastro de associado'
  @Input() id: string = ''
  @Input() preview: boolean = false

  associate: Associate = {
    id: undefined,
    active: true,
    name: undefined,
    document: undefined,
    card_number: undefined,
    gender: undefined,
    birthdate: undefined,
    cellphone_number: undefined,
    phone_number: undefined,
    marital_status: undefined,
    zip_code: undefined,
    street: undefined,
    number: undefined,
    complement: undefined,
    neighborhood: undefined,
    city: undefined,
    state: undefined
  }

  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  document = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  birthdate = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  cellphoneNumber = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  zipcode = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  street = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  number = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  neighborhood = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  city = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  state = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ])

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private service: AssociateService,
    private zipCodeService: ZipCodeService,
  ) {
    super()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (this.id == '') {
        this.id = String(paramMap.get('id'))
      }
    })

    if (this.id != 'null') {
      this.service.getItem(this.id).subscribe((data: AssociateItem) => {
        this.associate = data.data
      }, (erro: HttpErrorResponse) => {
        if (erro.status == 401) {
          this.router.navigateByUrl('/login')
          return
        }
        let message = STATUS_MESSAGE[erro.status]
        this.showError(message)
      })
    }

  }

  cancel() {
    this.router.navigateByUrl(`associates`)
  }

  isValid(): boolean {
    let valid: boolean = true

    if (this.name.invalid) {
      this.name.markAsTouched()
      valid = false
    }

    if (this.document.invalid) {
      this.document.markAsTouched()
      valid = false
    }

    if (this.birthdate.invalid) {
      this.birthdate.markAsTouched()
      valid = false
    }

    if (this.cellphoneNumber.invalid) {
      this.cellphoneNumber.markAsTouched()
      valid = false
    }

    if (this.zipcode.invalid) {
      this.zipcode.markAsTouched()
      valid = false
    }

    if (this.street.invalid) {
      this.street.markAsTouched()
      valid = false
    }

    if (this.number.invalid) {
      this.number.markAsTouched()
      valid = false
    }

    if (this.neighborhood.invalid) {
      this.neighborhood.markAsTouched()
      valid = false
    }

    if (this.city.invalid) {
      this.city.markAsTouched()
      valid = false
    }

    if (this.state.invalid) {
      this.state.markAsTouched()
      valid = false
    }

    return valid
  }

  save() {
    if (!this.isValid()) {
      return
    }

    if (!this.id || this.id == 'null') {
      this.service.postItem(this.associate).subscribe((data: AssociateItem) => {
        this.router.navigateByUrl(`associates/form/${data.data.id}`)
        this.messageService.showMessage('Novo associado cadastrado!', 'Sucesso!')
      }, (erro: HttpErrorResponse) => {
        if (erro.status == 401) {
          this.router.navigateByUrl('/login')
          return
        }
        let message = STATUS_MESSAGE[erro.status]
        this.showError(message)
      })
    } else {
      this.service.patchItem(this.id, this.associate).subscribe((data: AssociateItem) => {
        this.associate = data.data
        this.messageService.showMessage('Associado atualizado!', 'Sucesso!')
      }, (erro: HttpErrorResponse) => {
        if (erro.status == 401) {
          this.router.navigateByUrl('/login')
          return
        }
        let message = STATUS_MESSAGE[erro.status]
        this.showError(message)
      })
    }
  }

  searchZipCode() {
    if ((this.associate.zip_code)?.length == 8) {
      this.zipCodeService.getZipCode(String(this.associate.zip_code)).subscribe((data: ZipcodeItem) => {
        this.associate.street = data.data.street
        this.associate.neighborhood = data.data.neighborhood
        this.associate.city = data.data.city
        this.associate.state = data.data.state
      })
    }
  }

  showError(message: string) {
    this.dialog.open(ErrorComponent, {
      width: '250px',
      data: { message: message },
    })
  }
}
