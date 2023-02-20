import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-provider',
  templateUrl: './filter-provider.component.html',
  styleUrls: ['./filter-provider.component.scss']
})
export class FilterProviderComponent implements OnInit {

  filterActive: boolean = false
  filterName: boolean = false
  filterDocument: boolean = false
  filterSpecialty: boolean = false

  constructor(
    public dialogRef: MatDialogRef<FilterProviderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  sendData() {
    return {
      filterActive: this.filterActive,
      active: this.data.active,

      filterName: this.filterName,
      name: this.data.name,

      filterDocument: this.filterDocument,
      document: this.data.document,

      filterSpecialty: this.filterSpecialty,
      specialty: this.data.specialty,
    }
  }

}
