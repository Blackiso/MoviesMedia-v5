import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '@core/services/util.service';
import { FilterService } from '@core/services/filter.service';
import { SubNavigationConfig } from './config/sub-navigation.config';


@Component({
  selector: 'mm-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./styles/discover.style.css']
})
export class DiscoverComponent implements OnInit {

	private subs:Array<any> = [];
	public openFilter:boolean = false;
	public filter:boolean = false;
	public navigationData:any = SubNavigationConfig;

	constructor(private util:UtilService, private filterService:FilterService) { }

	ngOnInit() {
		let sub1 = this.filterService.mainEvent().subscribe(event => this.openFilter = event);
		let sub2 = this.filterService.filterEvent().subscribe(x => setTimeout(() => this.filter = x));
		this.subs.push(sub1);
		this.subs.push(sub2);
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}
}
