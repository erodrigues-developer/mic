import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatBadgeModule } from '@angular/material/badge'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDividerModule } from '@angular/material/divider'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatTabsModule } from '@angular/material/tabs'
import { MatRadioModule } from '@angular/material/radio'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatTreeModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatTreeModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: this },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    MatDatepickerModule,
  ],
})

export class MaterialModule { }
