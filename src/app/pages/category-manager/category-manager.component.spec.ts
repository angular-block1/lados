import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagerComponent } from './category-manager.component';

describe('CategoryManagerComponent', () => {
  let component: CategoryManagerComponent;
  let fixture: ComponentFixture<CategoryManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryManagerComponent]
    });
    fixture = TestBed.createComponent(CategoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
