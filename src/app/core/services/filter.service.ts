import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

	private filterState:boolean = false;
	private event = new Subject<boolean>();
	private filter = new Subject<boolean>();
	private data = new Subject<any>();
	
	constructor() { }

	toggleFilter() {
		this.filterState = !this.filterState;
		this.event.next(this.filterState);
	}

	loadFilter(x) {
		this.filter.next(x);
	}

	filterEvent() {
		return this.filter.asObservable();
	}

	setData(data) {
		this.data.next(data);
	}

	mainEvent() {
		return this.event.asObservable();
	}

	dataEvent() {
		return this.data.asObservable();
	}
}
