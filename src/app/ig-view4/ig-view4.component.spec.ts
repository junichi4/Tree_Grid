import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { IgView4Component } from './ig-view4.component';

describe('IgView4Component', () => {
  let component: IgView4Component;
  let fixture: ComponentFixture<IgView4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IgView4Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
