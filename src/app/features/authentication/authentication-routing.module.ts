import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnautheticatedGuard } from '@core/guardes/unautheticated.guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationComponent } from './authentication.component';


const routes: Routes = [
	{
		path: '',
		component: AuthenticationComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'register', 
				component: RegisterComponent
			}
		],
		canActivate: [UnautheticatedGuard]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
