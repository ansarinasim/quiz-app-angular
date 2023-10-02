import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnAngularComponent } from './qn-angular.component';

describe('QnAngularComponent', () => {
  let component: QnAngularComponent;
  let fixture: ComponentFixture<QnAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
