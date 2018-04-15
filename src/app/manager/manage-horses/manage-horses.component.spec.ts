import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHorsesComponent } from './manage-horses.component';

describe('ManageHorsesComponent', () => {
  let component: ManageHorsesComponent;
  let fixture: ComponentFixture<ManageHorsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHorsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
