import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ENDPOINTS } from '@core/api.config';
import { MoviesService } from '@core/services/movies.service';

@Component({
  selector: 'mm-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

	@Input() title:string;
	@Input() icon:string;
	@Input() category:number;
	movies:any = null;
	start:boolean = false;

	constructor(private moviesService:MoviesService) { }

	ngOnInit() {
		this.moviesService.getFilterMovies({ genres: this.category }, 1).subscribe(data => {
			this.movies = data.results || [];
			if(this.movies.length > 0) this.start = true;
		});
	}

}
