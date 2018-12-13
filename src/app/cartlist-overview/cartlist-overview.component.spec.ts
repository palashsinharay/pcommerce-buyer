import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlistOverviewComponent } from './cartlist-overview.component';

describe('CartlistOverviewComponent', () => {
  let component: CartlistOverviewComponent;
  let fixture: ComponentFixture<CartlistOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartlistOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlistOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
