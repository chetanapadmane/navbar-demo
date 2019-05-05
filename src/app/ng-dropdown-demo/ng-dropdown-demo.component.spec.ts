import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDropdownDemoComponent } from './ng-dropdown-demo.component';

describe('NgDropdownDemoComponent', () => {
  let component: NgDropdownDemoComponent;
  let fixture: ComponentFixture<NgDropdownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDropdownDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
