import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { Table1TypeMenu } from './models/menu/table1-type-menu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public menuTable1?: Table1TypeMenu;

  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.menuService.getTable1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.menuTable1 = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
