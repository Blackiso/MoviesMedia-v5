import { Component, OnInit } from '@angular/core';
import { FilterService } from '@core/services/filter.service';


@Component({
  selector: 'mm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	public is_filtring:boolean = false;
	public genres:any = [
		{
		    "id": 28,
		    "name": "Action"
		}, {
		    "id": 12,
		    "name": "Adventure"
		}, {
		    "id": 16,
		    "name": "Animation"
		}, {
		    "id": 35,
		    "name": "Comedy"
		}, {
		    "id": 80,
		    "name": "Crime"
		}, {
		    "id": 99,
		    "name": "Documentary"
		}, {
		    "id": 18,
		    "name": "Drama"
		}, {
		    "id": 10751,
		    "name": "Family"
		}, {
		    "id": 14,
		    "name": "Fantasy"
		}, {
		    "id": 36,
		    "name": "History"
		}, {
		    "id": 27,
		    "name": "Horror"
		}, {
		    "id": 10402,
		    "name": "Music"
		}, {
		    "id": 9648,
		    "name": "Mystery"
		}, {
		    "id": 10749,
		    "name": "Romance"
		}, {
		    "id": 878,
		    "name": "Science Fiction"
		}, {
		    "id": 10770,
		    "name": "TV Movie"
		}, {
		    "id": 53,
		    "name": "Thriller"
		}, {
		    "id": 10752,
		    "name": "War"
		}, {
		    "id": 37,
		    "name": "Western"
		}
	];

	constructor(private filter:FilterService) { }

	ngOnInit() {
		
	}

	close() {
		this.filter.toggleFilter();
	}

	onSubmit(data) {
		this.is_filtring = true;
		this.filter.setData(data);
		this.close();
	}

	clearFilter() {
		this.filter.setData({});
		this.is_filtring = false;
		this.close();
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
