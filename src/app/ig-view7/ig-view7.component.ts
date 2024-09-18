import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxDateTimeEditorModule, IgxIconComponent, IgxInputGroupModule, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { Table1TypeSample } from '../models/sample/table1-type-sample';
import { Table1TypeMenu } from '../models/menu/table1-type-menu';
import { SampleService } from '../services/sample.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-ig-view7',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxDateTimeEditorModule, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxInputGroupModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, FormsModule],
  templateUrl: './ig-view7.component.html',
  styleUrls: ['./ig-view7.component.scss']
})
export class IgView7Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public menuTable1?: Table1TypeMenu;
  public sampleTable1?: Table1TypeSample;

  constructor(
    private menuService: MenuService,
    private sampleService: SampleService,
  ) {}

  ngOnInit() {
    this.menuService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.menuTable1 = data
    );
    this.sampleService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.sampleTable1 = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
