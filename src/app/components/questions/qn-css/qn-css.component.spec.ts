import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnCssComponent } from './qn-css.component';

describe('QnCssComponent', () => {
  let component: QnCssComponent;
  let fixture: ComponentFixture<QnCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
