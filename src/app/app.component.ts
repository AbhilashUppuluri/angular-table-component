import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-table-component';
  public tableData = [];

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.getTableData();
  }
  
  getTableData() {
    this.tableService.getTableData().subscribe((response: any) => {
      this.tableData = response;
    });
  }

  
}
