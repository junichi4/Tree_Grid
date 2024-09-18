import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { IgView6Component } from './ig-view6.component';

describe('IgView6Component', () => {
  let component: IgView6Component;
  let fixture: ComponentFixture<IgView6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IgView6Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
