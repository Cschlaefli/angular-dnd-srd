import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellFilterComponent } from './spell-filter.component';

describe('SpellFilterComponent', () => {
  let component: SpellFilterComponent;
  let fixture: ComponentFixture<SpellFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
