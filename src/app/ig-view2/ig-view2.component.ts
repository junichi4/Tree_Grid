import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { Table1TypeShop } from '../models/shop/table1-type-shop';
import { Table1TypeSample } from '../models/sample/table1-type-sample';
import { Table1TypeMenu } from '../models/menu/table1-type-menu';
import { SampleService } from '../services/sample.service';
import { MenuService } from '../services/menu.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-ig-view2',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, FormsModule],
  templateUrl: './ig-view2.component.html',
  styleUrls: ['./ig-view2.component.scss']
})
export class IgView2Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public menuTable1?: Table1TypeMenu;
  public shopTable1?: Table1TypeShop;
  public sampleTable1?: Table1TypeSample;

  constructor(
    private menuService: MenuService,
    private shopService: ShopService,
    private sampleService: SampleService,
  ) {}

  ngOnInit() {
    this.menuService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.menuTable1 = data
    );
    this.shopService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.shopTable1 = data
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
