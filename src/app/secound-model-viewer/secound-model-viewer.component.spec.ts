import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundModelViewerComponent } from './secound-model-viewer.component';

describe('SecoundModelViewerComponent', () => {
  let component: SecoundModelViewerComponent;
  let fixture: ComponentFixture<SecoundModelViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecoundModelViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecoundModelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
