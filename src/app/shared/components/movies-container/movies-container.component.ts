import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'mm-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent {

	@Input() movies:any;
	@Input() loading:boolean;
	@Output() load = new EventEmitter<boolean>();

	constructor() {}

	loadMore() {
		if (!this.loading) {
			this.load.emit(true);
		}
	}

}
