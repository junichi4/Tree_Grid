import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxDateTimeEditorModule, IgxIconComponent, IgxInputGroupModule, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { Table1Type } from '../models/detail-sample/table1-type';
import { Table1TypeMenu } from '../models/menu/table1-type-menu';
import { MenuService } from '../services/menu.service';
import { DetailSampleService } from '../services/detail-sample.service';

@Component({
  selector: 'app-ig-view5',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxDateTimeEditorModule, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxInputGroupModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, FormsModule],
  templateUrl: './ig-view5.component.html',
  styleUrls: ['./ig-view5.component.scss']
})
export class IgView5Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public menuTable1?: Table1TypeMenu;
  public detailSampleTable1?: Table1Type;

  constructor(
    private menuService: MenuService,
    private detailSampleService: DetailSampleService,
  ) {}

  ngOnInit() {
    this.menuService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.menuTable1 = data
    );
    this.detailSampleService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.detailSampleTable1 = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
