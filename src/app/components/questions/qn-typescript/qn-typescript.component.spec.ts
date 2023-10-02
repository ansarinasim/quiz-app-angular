import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnTypescriptComponent } from './qn-typescript.component';

describe('QnTypescriptComponent', () => {
  let component: QnTypescriptComponent;
  let fixture: ComponentFixture<QnTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnTypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
