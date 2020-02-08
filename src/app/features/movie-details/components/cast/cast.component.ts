import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mm-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css', '../../movie-details.component.css']
})
export class CastComponent implements OnInit {

	@Input() cast:any;
	viewCast:any = [];
	more:boolean = false;
	public currentChunk:number = 0;
	public initLength:number;
	public maxActors:number = 14;

	constructor(private chnages:ChangeDetectorRef) { }

	ngOnInit() {
		this.initLength = this.cast.length;
		if (this.cast.length > this.maxActors) this.more = true;
		let castChunks = [[]];
		let index = 0;

		for (let i = 0; i < this.cast.length; i++) {
			if (castChunks[index].length == this.maxActors) {
				index++;
				castChunks[index] = [];
			}
			castChunks[index].push(this.cast[i]);
		}

		this.cast = castChunks;
		this.viewCast = castChunks[0];
	}

	loadMore() {
		this.currentChunk = this.currentChunk + 1;
		this.viewCast = [...this.viewCast, ...this.cast[this.currentChunk]];
		if (this.viewCast.length == this.initLength) this.more = false;
	}

	loadLess() {
		this.viewCast = this.cast[0];
		this.more = true;
		this.currentChunk = 0;
	}

}
