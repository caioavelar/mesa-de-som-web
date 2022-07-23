import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMesaComponent } from './lista-mesa.component';

describe('ListaMesaComponent', () => {
  let component: ListaMesaComponent;
  let fixture: ComponentFixture<ListaMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
