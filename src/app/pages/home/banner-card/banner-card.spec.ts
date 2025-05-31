import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCard } from './banner-card';

describe('BannerCard', () => {
  let component: BannerCard;
  let fixture: ComponentFixture<BannerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
