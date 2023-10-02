import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnPhpComponent } from './qn-php.component';

describe('QnPhpComponent', () => {
  let component: QnPhpComponent;
  let fixture: ComponentFixture<QnPhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnPhpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
