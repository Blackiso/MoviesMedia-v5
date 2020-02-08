import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

	private event = new Subject<any>();

	constructor() { }

	toggleDetails(id) {
		this.event.next(id);
	}

	detailsEvents() {
		return this.event.asObservable();
	}
}
