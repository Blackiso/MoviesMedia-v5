import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Movie } from '@core/models/movie.model';
import { UtilService } from '@core/services/util.service';


@Component({
  selector: 'mm-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

	@Input() overlay:boolean = false;
	@Input() data:Movie;
	public elemntId:string;
	private posterElemnt:HTMLElement;
	private pressedCtl:boolean = false;

	constructor(private util:UtilService) {
		this.elemntId = util.generateElemntId();
	}

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		this.posterElemnt = document.getElementById(this.elemntId) as HTMLElement;
		this.posterElemnt.addEventListener('click', this.posterClick.bind(this));
		document.addEventListener('keydown', this.ctl.bind(this, true));
		document.addEventListener('keyup', this.ctl.bind(this, false));
	}

	posterClick() {
		this.openMovie(this.pressedCtl);
	}

	ctl(b, e) {
		if (e.keyCode === 17) this.pressedCtl = b;
	}

	openMovie(x) {
		if (x) {
			window.open('/movie/'+Math.random());
		}else {
			this.util.router.navigate([{ outlets: { overlay: ['movie', Math.random()] } }], { skipLocationChange: true });
		}
	}
}
