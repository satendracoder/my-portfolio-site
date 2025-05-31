import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCard } from './menu-card';

describe('MenuCard', () => {
  let component: MenuCard;
  let fixture: ComponentFixture<MenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
