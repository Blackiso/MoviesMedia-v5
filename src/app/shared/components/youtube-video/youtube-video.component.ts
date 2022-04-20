import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mm-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {

	@Input() url:string;

	constructor() { }

	ngOnInit() {
	}

}
