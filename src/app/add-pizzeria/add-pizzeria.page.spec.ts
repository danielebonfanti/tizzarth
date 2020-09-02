import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPizzeriaPage } from './add-pizzeria.page';

describe('AddPizzeriaPage', () => {
  let component: AddPizzeriaPage;
  let fixture: ComponentFixture<AddPizzeriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPizzeriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPizzeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
