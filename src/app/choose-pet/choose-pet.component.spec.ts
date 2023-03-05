import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePetComponent } from './choose-pet.component';

describe('ChoosePetComponent', () => {
  let component: ChoosePetComponent;
  let fixture: ComponentFixture<ChoosePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
