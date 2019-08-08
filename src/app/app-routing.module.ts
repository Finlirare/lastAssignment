import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './login/login.module';


const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full' },
 // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  
];
/*
const routes: Routes = [
 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },

  { path: 'tabs/tab1', loadChildren: './tab1/tab1.module#Tab1PageModule', canActivate: [AuthGuard] },
  { path: 'tabs/tab2', loadChildren: './tab2/tab2.module#Tab2PageModule', canActivate: [AuthGuard] },
  { path: 'tabs/tab3', loadChildren: './tab3/tab3.module#Tab3PageModule', canActivate: [AuthGuard] },
{
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuard]
  }

      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
      { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
      { path: 'tabs/tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
      { path: 'tabs/tab2', loadChildren: './tab2/tab2.module#Tab2PageModule', canActivate: [AuthGuard] },
      { path: 'tabs/tab3', loadChildren: './tab3/tab3.module#Tab3PageModule', canActivate: [AuthGuard] },
  ];
*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), LoginPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
