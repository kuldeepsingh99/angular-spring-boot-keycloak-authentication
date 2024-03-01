import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path :'',
    redirectTo : '',
    pathMatch : 'full',
    canActivate: [AuthGuard],
    data: { roles: ['TEST'] }
  },
  {
    path: 'admin',
    component : AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path: 'manager',
    component : ManagerComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_MANAGER'] },
  },
  {
    path: 'access-denied',
    component : AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
