import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaInglesComponent } from './turma-ingles.component';

describe('TurmaInglesComponent', () => {
  let component: TurmaInglesComponent;
  let fixture: ComponentFixture<TurmaInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaInglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmaInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
