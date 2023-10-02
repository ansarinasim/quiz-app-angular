import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnJavascriptComponent } from './qn-javascript.component';

describe('QnJavascriptComponent', () => {
  let component: QnJavascriptComponent;
  let fixture: ComponentFixture<QnJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
