import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { IgViewComponent } from './ig-view/ig-view.component';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';
import { IgView3Component } from './ig-view3/ig-view3.component';
import { IgView4Component } from './ig-view4/ig-view4.component';
import { IgView5Component } from './ig-view5/ig-view5.component';
import { IgView6Component } from './ig-view6/ig-view6.component';
import { IgView7Component } from './ig-view7/ig-view7.component';
import { IgView8Component } from './ig-view8/ig-view8.component';
import { IgView9Component } from './ig-view9/ig-view9.component';
import { IgView10Component } from './ig-view10/ig-view10.component';
import { IgView11Component } from './ig-view11/ig-view11.component';
import { IgView12Component } from './ig-view12/ig-view12.component';
import { IgView13Component } from './ig-view13/ig-view13.component';
import { IgView14Component } from './ig-view14/ig-view14.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ig-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'ig-view', component: IgViewComponent, data: { text: '\u5F53\u6708\u58F2\u4E0A\u660E\u7D30\u53D6\u8FBC' } },
  { path: 'ig-view1', component: IgView1Component, data: { text: '\u5F53\u6708\u5E97\u5225\u5408\u8A08\u4E00\u89A7' } },
  { path: 'ig-view2', component: IgView2Component, data: { text: '\u5F53\u6708\u5E97\u5225\u5408\u8A08\u4E00\u89A7\uFF08\u58F2\u4E0A\u5E74\u6708\u5225\uFF09' } },
  { path: 'ig-view3', component: IgView3Component, data: { text: '\u5F53\u6708\u5E97\u5225\u66F8\u8A8C\u660E\u7D30\u4E00\u89A7' } },
  { path: 'ig-view4', component: IgView4Component, data: { text: '\u5F53\u6708\u66F8\u8A8C\u5225\u5408\u8A08\u4E00\u89A7' } },
  { path: 'ig-view5', component: IgView5Component, data: { text: '\u5F53\u6708\u8457\u8005\u5225\u5408\u8A08\u4E00\u89A7' } },
  { path: 'ig-view6', component: IgView6Component, data: { text: '\u5F53\u6708\u66F8\u8A8C\u5358\u4FA1\u5225\u5408\u8A08\u4E00\u89A7\uFF08\u6D77\u5916\u7248\u6A29\uFF09' } },
  { path: 'ig-view7', component: IgView7Component, data: { text: '\u5F53\u6708\u58F2\u4E0A\u6708\u6B21\u7DE0\u3081' } },
  { path: 'ig-view8', component: IgView8Component, data: { text: '\u7D2F\u8A08\u5E97\u5225\u5408\u8A08\u4E00\u89A7\uFF08\u58F2\u4E0A\u5E74\u6708\u5225\uFF09' } },
  { path: 'ig-view9', component: IgView9Component, data: { text: '\u7D2F\u8A08\u5E97\u5225\u5408\u8A08\u4E00\u89A7' } },
  { path: 'ig-view10', component: IgView10Component, data: { text: '\u7D2F\u8A08\u5E97\u5225\u66F8\u8A8C\u660E\u7D30\u4E00\u89A7' } },
  { path: 'ig-view11', component: IgView11Component, data: { text: '\u7D2F\u8A08\u66F8\u8A8C\u5225\u5408\u8A08\u4E00\u89A7' } },
  { path: 'ig-view12', component: IgView12Component, data: { text: '\u7D2F\u8A08\u8457\u8005\u5225\u5408\u8A08\u4E00\u89A7' } },
  { path: 'ig-view13', component: IgView13Component, data: { text: '\u7D2F\u8A08\u66F8\u8A8C\u5358\u4FA1\u5225\u5408\u8A08\u4E00\u89A7\uFF08\u6D77\u5916\u7248\u6A29\uFF09' } },
  { path: 'ig-view14', component: IgView14Component, data: { text: '\u30C6\u30B9\u30C8' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
