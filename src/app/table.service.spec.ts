import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

import { TableService } from './table.service';

describe('TableService', () => {
  let service: TableService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TableService]
    });
    service = TestBed.inject(TableService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retreive data from JSON', () => {
    const dummyData = [{},{}];
    service.getTableData().subscribe((data:any) => {
      expect(data.length).toBe(2);
    });
    const mockRequest = httpMock.expectOne(`./assets/sample_data.json`);
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(dummyData);
    httpMock.verify();
  });

  it('should be able submit rowId, status API', () => {
    service.submitRow(1, "read").subscribe((data:any) => {
     
    });
    const mockRequest = httpMock.expectOne(`/api/submit`);
    expect(mockRequest.request.method).toBe('POST');
    httpMock.verify();
  });
});
