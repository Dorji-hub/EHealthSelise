import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckuphistoryComponent } from './checkuphistory.component';

describe('CheckuphistoryComponent', () => {
  let component: CheckuphistoryComponent;
  let fixture: ComponentFixture<CheckuphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckuphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckuphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
