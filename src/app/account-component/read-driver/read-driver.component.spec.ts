import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDriverComponent } from './read-driver.component';

describe('ReadDriverComponent', () => {
  let component: ReadDriverComponent;
  let fixture: ComponentFixture<ReadDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
