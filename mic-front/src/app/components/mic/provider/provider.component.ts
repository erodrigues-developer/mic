import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { STATUS_MESSAGE } from 'src/app/constants/httpErros';
import { DateHelper } from 'src/app/helpers/date.helper';
import { Provider } from 'src/app/interfaces/mic/provider/provider';
import { ProviderCollection } from 'src/app/interfaces/mic/provider/providerCollection';
import { MessageService } from 'src/app/services/message.service';
import { ProviderService } from 'src/app/services/provider.service';
import { DeleteComponent } from '../../delete/delete.component';
import { ErrorComponent } from '../../error/error.component';
import { FilterProviderComponent } from './filter-provider/filter-provider.component';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  section: string = 'Prestadores'
  currentPage: number = 1
  totalPage: number = 0
  perPage: number = 10
  dataFilter: any
  result: ProviderCollection | undefined
  columnSort: string = 'id'
  directionSort: string = 'asc'
  displayedColumns: string[] = [
    'document',
    'name',
    'specialty',
    'cellphone_number',
    'id',
  ]
  dataSource: Provider[] = []

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public service: ProviderService,
    private messageService: MessageService,
    private dateHelper: DateHelper,
  ) {
  }

  ngOnInit(): void {
    this.getCollection()
  }

  sort(column: string) {
    if (this.columnSort == column) {
      this.directionSort = this.directionSort == 'asc' ? 'desc' : 'asc'
    }

    this.columnSort = column
    this.getCollection()
  }

  getCollection() {
    let params = new HttpParams
    params = params.append('page', this.currentPage)
    params = params.append('per_page', this.perPage)

    if (this.dataFilter) {
      if (this.dataFilter.filterActive) {
        params = params.append('active', this.dataFilter.active)
      }
      if (this.dataFilter.filterName) {
        params = params.append('name', this.dataFilter.name)
      }
      if (this.dataFilter.filterDocument) {
        params = params.append('document', this.dataFilter.document)
      }
      if (this.dataFilter.filterSpecialty) {
        params = params.append('specialty', this.dataFilter.specialty)
      }
    }

    if (this.columnSort != 'id') {
      params = params.append('sort', this.columnSort)
      params = params.append('direction', this.directionSort)
    }

    this.service.getCollection(params)
      .subscribe((data: ProviderCollection) => {
        this.result = { ...data }
        this.currentPage = this.result.current_page
        this.totalPage = this.result.last_page
        this.dataSource = this.result.data
      }, (erro: HttpErrorResponse) => {
        if (erro.status == 401) {
          this.router.navigateByUrl('/login')
          return
        }
        let message = STATUS_MESSAGE[erro.status]
        this.showError(message, 'Falha ao recuperar os dados')
      })
  }

  new() {
    this.router.navigateByUrl('providers/form')
  }

  edit(id: string) {
    this.router.navigateByUrl(`providers/form/${id}`)
  }

  delete(id: string) {
    this.confirmDelete(id)
  }

  nextPage() {
    this.currentPage++
    this.getCollection()
  }

  previousPage() {
    this.currentPage--
    this.getCollection()
  }

  disabledPreviousPage(): boolean {
    return this.currentPage == 1
  }

  disabledNextPage(): boolean {
    return this.currentPage == this.totalPage
  }

  filter() {
    const dialogRef = this.dialog.open(FilterProviderComponent, {
      width: '500px',
      data: {
        name: '',
        document: '',
        card_number: '',
        active: false
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      this.dataFilter = result
      this.getCollection()
    })
  }

  confirmDelete(id: string) {
    const dialogDelete = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: {},
    })

    dialogDelete.afterClosed().subscribe(result => {
      this.dataFilter = result
      if (this.dataFilter) {
        this.service.deleteItem(id).subscribe(() => {
          this.getCollection()
          this.messageService.showMessage(`Deletado com sucesso`, 'Sucesso')
        }, (erro: HttpErrorResponse) => {
          if (erro.status == 401) {
            this.router.navigateByUrl('/login')
            return
          }
          let message = STATUS_MESSAGE[erro.status]
          let title: string = erro.error.errors.id[0]
          this.showError(message, title)
        })
      }
    })
  }

  showError(message: string, title: string) {
    this.dialog.open(ErrorComponent, {
      width: '250px',
      data: { message: message, title: title },
    })
  }

}
