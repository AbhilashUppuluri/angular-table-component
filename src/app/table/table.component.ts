import { Component, OnInit, Input } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  public pageSize: number = 10;
  @Input()
  public data = [];

  public displayData = [];
  public currentPage: number = 0;
  public totalPages: number = 0;

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.initializeData();
  }

  private initializeData() {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.displayData = this.data.slice(0, this.pageSize);
  }

  public changePageSize($event) {
    this.initializeData();
  }

  public handleNext() {
    if (this.currentPage < this.totalPages-1) {
      this.currentPage++;
      let count = this.currentPage * Number(this.pageSize);
      this.displayData = this.data.slice(count, count + Number(this.pageSize));
    }
  }

  public handlePrev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      let count = this.currentPage * Number(this.pageSize);
      this.displayData = this.data.slice(count, count + Number(this.pageSize));
    }
  }

  public submitRow(row) {
    this.tableService.submitRow(row.id, row.status)
    .subscribe((data) => {
      console.log('successfully submitted the row');
    }, (error) => {
      console.log('Failed to submit the row');
    });
  }

}
