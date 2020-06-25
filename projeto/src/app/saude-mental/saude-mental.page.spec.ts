import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeMentalPage } from './saude-mental.page';

describe('SaudeMentalPage', () => {
  let component: SaudeMentalPage;
  let fixture: ComponentFixture<SaudeMentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeMentalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeMentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
