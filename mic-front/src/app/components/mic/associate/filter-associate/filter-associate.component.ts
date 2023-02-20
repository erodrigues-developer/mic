import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-associate',
  templateUrl: './filter-associate.component.html',
  styleUrls: ['./filter-associate.component.scss']
})
export class FilterAssociateComponent implements OnInit {
  filterActive: boolean = false
  filterName: boolean = false
  filterDocument: boolean = false
  filterCardNumber: boolean = false

  constructor(
    public dialogRef: MatDialogRef<FilterAssociateComponent>,
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

      filterCardNumber: this.filterCardNumber,
      card_number: this.data.card_number,
    }
  }

}
