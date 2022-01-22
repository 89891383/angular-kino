import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingsListComponent } from './showings-list.component';

describe('ShowingsListComponent', () => {
  let component: ShowingsListComponent;
  let fixture: ComponentFixture<ShowingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
