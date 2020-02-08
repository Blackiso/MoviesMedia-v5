import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

	protected pageCount:number = 1;

	constructor(protected http:HttpClient, protected util:UtilService) { }

	

}
