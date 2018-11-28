import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdImageGalComponent } from './prod-image-gal.component';

describe('ProdImageGalComponent', () => {
  let component: ProdImageGalComponent;
  let fixture: ComponentFixture<ProdImageGalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdImageGalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdImageGalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
