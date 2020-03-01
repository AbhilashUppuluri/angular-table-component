import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {}

  getTableData() {
    return this.http.get("./assets/sample_data.json");
  }

  submitRow(rowId, rowStatus) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const req = {
      id: rowId,
      status: rowStatus
    };

    return this.http.post("/api/submit", req, options);
  }
}
