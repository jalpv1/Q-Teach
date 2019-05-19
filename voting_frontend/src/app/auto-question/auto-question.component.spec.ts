import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { autoQuestionComponent } from './auto-question.component';

describe('AutoQuestionComponent', () => {
  let component: autoQuestionComponent;
  let fixture: ComponentFixture<autoQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ autoQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(autoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
