import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
	
	constructor(private userService: UserService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let _url = request.urlWithParams;
		if (this.userService.key !== undefined) {
			let ex = request.urlWithParams.includes('?') ? '&' : '?';
			_url += ex+'key='+this.userService.key;
		}
		
		request = request.clone({
			url: _url
		});

		return next.handle(request);
    }
}