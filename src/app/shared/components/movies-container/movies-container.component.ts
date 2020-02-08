import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'mm-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent {

	@Input() movies:any;
	@Input() loading:boolean;
	@Output() load = new EventEmitter<number>();
	private page:number = 1;

	constructor() {}

	loadMore() {
		if (!this.loading) {
			this.page++;
			this.load.emit(this.page);
		}
	}

	resetPage() {
		this.page = 1;
	}
}
