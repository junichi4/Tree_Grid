import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { IgView7Component } from './ig-view7.component';

describe('IgView7Component', () => {
  let component: IgView7Component;
  let fixture: ComponentFixture<IgView7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IgView7Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
