import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SubNavigationConfig } from './config/sub-navigation.config';
import { FilterService } from '@core/services/filter.service';

@Component({
  selector: 'mm-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

	public openFilter:boolean = false;
	public filter:boolean = false;
	public navigationData:any = SubNavigationConfig;
	private subs:Array<any> = [];

	constructor(private filterService:FilterService) { }

	ngOnInit() {
		let filtersub = this.filterService.filterEvent().subscribe(x => setTimeout(() => this.filter = x));
		let openEvent = this.filterService.mainEvent().subscribe(x => this.openFilter = x);
		this.subs.push(filtersub);
		this.subs.push(openEvent);
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}

}
