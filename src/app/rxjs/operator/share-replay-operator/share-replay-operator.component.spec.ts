import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayOperatorComponent } from './share-replay-operator.component';

describe('ShareReplayOperatorComponent', () => {
  let component: ShareReplayOperatorComponent;
  let fixture: ComponentFixture<ShareReplayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReplayOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
