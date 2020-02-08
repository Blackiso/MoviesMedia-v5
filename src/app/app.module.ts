import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from '@core/services/user.service';
import { CustomHttpInterceptor } from '@core/classes/CustomHttpInterceptor';
import { AuthenticationGuard } from '@core/guardes/authentication.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AuthenticationModule } from '@features/authentication/authentication.module';

export function UserAuthFactory(service:UserService) {
    console.log('Factory running');
    return () => service.authenticate();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AuthenticationModule
  ],
  providers: [
    AuthenticationGuard,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: UserAuthFactory,
      multi: true,
      deps: [UserService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

