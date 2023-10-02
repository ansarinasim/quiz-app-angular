import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQnComponent } from './admin-add-qn.component';

describe('AdminAddQnComponent', () => {
  let component: AdminAddQnComponent;
  let fixture: ComponentFixture<AdminAddQnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddQnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddQnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
