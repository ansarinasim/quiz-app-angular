import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnJsxComponent } from './qn-jsx.component';

describe('QnJsxComponent', () => {
  let component: QnJsxComponent;
  let fixture: ComponentFixture<QnJsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnJsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnJsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
