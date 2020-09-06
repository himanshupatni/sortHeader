import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortValuesComponent } from './sort-values.component';

describe('SortValuesComponent', () => {
  let component: SortValuesComponent;
  let fixture: ComponentFixture<SortValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
