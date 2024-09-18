import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxDateTimeEditorModule, IgxIconComponent, IgxInputGroupModule, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { Table1TypeShop_sum } from '../models/shop-sum/table1-type-shop-sum';
import { Table1TypeMenu } from '../models/menu/table1-type-menu';
import { MenuService } from '../services/menu.service';
import { ShopSumService } from '../services/shop-sum.service';

@Component({
  selector: 'app-ig-view1',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxDateTimeEditorModule, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxInputGroupModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, FormsModule],
  templateUrl: './ig-view1.component.html',
  styleUrls: ['./ig-view1.component.scss']
})
export class IgView1Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public menuTable1?: Table1TypeMenu;
  public shopSumTable1?: Table1TypeShop_sum;

  constructor(
    private menuService: MenuService,
    private shopSumService: ShopSumService,
  ) {}

  ngOnInit() {
    this.menuService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.menuTable1 = data
    );
    this.shopSumService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.shopSumTable1 = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
