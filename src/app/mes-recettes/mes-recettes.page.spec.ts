import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesRecettesPage } from './mes-recettes.page';

describe('MesRecettesPage', () => {
  let component: MesRecettesPage;
  let fixture: ComponentFixture<MesRecettesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesRecettesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesRecettesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
