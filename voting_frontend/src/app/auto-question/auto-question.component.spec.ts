import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { AutoQuestionComponent } from './auto-question.component';

describe('AutoQuestionComponent', () => {
  let component: AutoQuestionComponent;
  let fixture: ComponentFixture<AutoQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
