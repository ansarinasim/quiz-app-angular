import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnReactComponent } from './qn-react.component';

describe('QnReactComponent', () => {
  let component: QnReactComponent;
  let fixture: ComponentFixture<QnReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
