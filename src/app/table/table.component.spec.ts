import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { TableComponent } from './table.component';
import { TableService } from '../table.service';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let tableService: TableService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [HttpClientModule],
      providers:[TableService],
    })
    .compileComponents();
    tableService = TestBed.get(TableService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handlePrev method on prevClick', () => {
    component.currentPage = 1;
    component.pageSize = 5;
    component.totalPages = 10;
    component.data = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    fixture.detectChanges();
    component.handlePrev();
    expect(component.displayData.length).toBe(5);
  });

  it('should call handleNext method on handleNext Click', () => {
    component.pageSize = 4;
    component.totalPages = 10;
    component.currentPage = 0;
    component.data = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    component.handleNext();
    expect(component.displayData.length).toBe(4);
  });

  it('should execute method on submit click', () => {
    const tableServiceSpy = spyOn(tableService, 'submitRow').and.returnValue(of({}));
    component.submitRow({id: 2, status: 'read'});
    expect(tableServiceSpy).toHaveBeenCalled();
  });
  
  it('should throw error on submit click', () => {
    const tableServiceSpy = spyOn(tableService, 'submitRow').and.returnValue(throwError('error'));
    component.submitRow({id: 2, status: 'read'});
    expect(tableServiceSpy).toHaveBeenCalled();
  });

});
