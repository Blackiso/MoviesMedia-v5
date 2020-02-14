import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';
import { UtilService } from '@core/services/util.service';


@Injectable({
  providedIn: 'root'
})
export class UnautheticatedGuard implements CanActivate {

	constructor(private userService:UserService, private util:UtilService) {}

	canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.userService.is_loggedInValue) {
    		this.util.navigateTo('/home');
    	}
		return !this.userService.is_loggedInValue;
	}
  
}
