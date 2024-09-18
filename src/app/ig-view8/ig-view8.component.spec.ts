import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective } from '@infragistics/igniteui-angular';
import { IgView8Component } from './ig-view8.component';

describe('IgView8Component', () => {
  let component: IgView8Component;
  let fixture: ComponentFixture<IgView8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IgView8Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
