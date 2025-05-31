import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterCard } from './newsletter-card';

describe('NewsletterCard', () => {
  let component: NewsletterCard;
  let fixture: ComponentFixture<NewsletterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
