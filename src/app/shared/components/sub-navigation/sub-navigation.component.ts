import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { UtilService } from '@core/services/util.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'mm-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.css']
})
export class SubNavigationComponent implements OnInit {

	@Input() data:any;
	private routerEventSubscription:any;

	constructor(private util:UtilService) { }

	ngOnInit() {
		this.routerEventSubscription = this.util.router.events.subscribe(e => {
			if (e instanceof NavigationEnd) {
				this.setBorderFromUrl();
			}
		});
	}

	ngAfterViewInit() {
		this.setBorderFromUrl();
	}

	setBorderFromUrl() {
		let location = window.location.pathname;
		let id = location.split('/')[2];
		let elem = document.getElementById(id) as HTMLElement;
		if (elem !== null) {
			this.setBorder(elem);
		}
	}

	navigate(e) {
		let target = e.currentTarget;
		this.setBorder(target);
		this.util.navigateTo(target.dataset.to);
	}

	setBorder(elem) {
		let border = document.querySelector('#navigation-slide-border') as HTMLElement;
		let offsetLeft = elem.offsetLeft;
		let offsetWidth = elem.offsetWidth;
		border.style.width = offsetWidth+"px";
		border.style.transform = "translateX("+offsetLeft+"px)";
	}

	ngOnDestroy() {
		this.routerEventSubscription.unsubscribe();
	}
}
