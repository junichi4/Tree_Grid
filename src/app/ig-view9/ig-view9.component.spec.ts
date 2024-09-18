import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective } from '@infragistics/igniteui-angular';
import { IgView9Component } from './ig-view9.component';

describe('IgView9Component', () => {
  let component: IgView9Component;
  let fixture: ComponentFixture<IgView9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IgView9Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDateTimeEditorModule, IgxInputGroupModule, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
