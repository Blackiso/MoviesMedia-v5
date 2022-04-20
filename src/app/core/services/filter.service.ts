import { Injectable } from '@angular/core';
import { FilterObject } from '@shared/interfaces';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

	private filterState:boolean = false;
	private event = new Subject<boolean>();
	private filter = new Subject<boolean>();
	private data = new Subject<FilterObject>();
	

	constructor() { }

	toggleFilter() {
		this.filterState = !this.filterState;
		this.event.next(this.filterState);
	}

	loadFilter(x:boolean) {
		this.filter.next(x);
	}

	filterEvent():Observable<boolean> {
		return this.filter.asObservable();
	}

	setData(data:FilterObject) {
		this.data.next(data);
	}

	mainEvent():Observable<boolean> {
		return this.event.asObservable();
	}

	dataEvent():Observable<FilterObject> {
		return this.data.asObservable();
	}
}
