import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
	
	constructor(private userService: UserService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (this.userService.getToken() !== null) {
			request = request.clone({ 
				headers: request.headers.set('Authorization', `Bearer ${this.userService.getToken()}`),
			});
		}
		
		return next.handle(request);
    }
}