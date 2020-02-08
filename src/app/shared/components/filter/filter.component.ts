import { Component, OnInit } from '@angular/core';
import { FilterService } from '@core/services/filter.service';


@Component({
  selector: 'mm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	public is_filtring:boolean = false;

	constructor(private filter:FilterService) { }

	ngOnInit() {
		
	}

	close() {
		this.filter.toggleFilter();
	}

	onSubmit(data) {
		this.is_filtring = true;
		this.filter.setData(data);
	}

	clearFilter() {
		this.filter.setData(null);
		this.is_filtring = false;
	}

	toggleOption(e) {
		let target = e.currentTarget.parentNode;
		target.classList.toggle('option-close');
		let arrow = target.querySelector('.toggle-arrow');

		if (target.classList.contains('option-close')) {
			arrow.classList.remove('ri-arrow-down-s-fill');
			arrow.classList.add('ri-arrow-left-s-fill');
		}else {
			arrow.classList.remove('ri-arrow-left-s-fill');
			arrow.classList.add('ri-arrow-down-s-fill');
		}
	}

}
