import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_TREE_GRID_DIRECTIVES, IgxButtonDirective, IgxDateTimeEditorModule, IgxIconComponent, IgxInputGroupModule, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { Table1TypeMenu } from '../models/menu/table1-type-menu';
import { MenuService } from '../services/menu.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-ig-view14',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_TREE_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxDateTimeEditorModule, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxInputGroupModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, FormsModule],
  templateUrl: './ig-view14.component.html',
  styleUrls: ['./ig-view14.component.scss']
})
export class IgView14Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public menuTable1?: Table1TypeMenu;
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    private menuService: MenuService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.menuService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.menuTable1 = data
    );
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
