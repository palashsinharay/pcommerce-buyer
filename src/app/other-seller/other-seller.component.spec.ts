import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSellerComponent } from './other-seller.component';

describe('OtherSellerComponent', () => {
  let component: OtherSellerComponent;
  let fixture: ComponentFixture<OtherSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
