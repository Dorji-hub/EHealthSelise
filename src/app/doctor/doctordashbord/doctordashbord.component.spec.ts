import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordashbordComponent } from './doctordashbord.component';

describe('DoctordashbordComponent', () => {
  let component: DoctordashbordComponent;
  let fixture: ComponentFixture<DoctordashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctordashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctordashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
