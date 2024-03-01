import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './service/keycloak-init';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
    AuthGuard,
    AuthService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
