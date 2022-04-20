import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';
import { UtilService } from '@core/services/util.service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {

	constructor(private userService:UserService, private util:UtilService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    	this._goHome();
        return this.userService.loginStateValue();
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    	this._goHome();
        return this.userService.loginStateValue();
    }

    private _goHome() {
    	if (!this.userService.loginStateValue()) {
    		this.util.navigateTo('/home');
    	}
    }
}
