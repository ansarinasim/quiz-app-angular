import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnHtmlComponent } from './qn-html.component';

describe('QnHtmlComponent', () => {
  let component: QnHtmlComponent;
  let fixture: ComponentFixture<QnHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
