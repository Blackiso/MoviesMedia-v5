import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { lineChartConfig } from '../../config/line-chart.config';
import { pieChartConfig } from '../../config/pie-chart.config';

@Component({
  selector: 'mm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

	@ViewChild('lineChart', { static: true }) lineChartRef:ElementRef;
	@ViewChild('pieChart', { static: true }) pieChartRef:ElementRef;
	public lineChartObj:any;
	public pieChartObj:any;
	public lineChartConfig:any = lineChartConfig;
	public pieChartConfig:any = pieChartConfig;
	public lineData:any = {
		labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
		datasets: [
			{
				label: 'Movies',
				data: [20, 44, 60, 67, 75, 82, 90, 95, 101, 90, 120],
				fill: false,
				borderColor: 'gold',
				backgroundColor: 'gold',
				borderWidth: 2
			}
		]
	};
	public pieData:any = {
		labels: ['Action', 'Adventure', 'Comedy', 'Other'],
		datasets: [
			{
				label: 'Total',
				data: [60, 44, 20, 5],
				backgroundColor: [
					'#F1D807',
					'#9dbeed',
					'#ffffff',
					'#c1c0b1',
					'#666666',
				]
			}
		]
	};

	constructor() { }

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		this.lineChartConfig.data = this.lineData;
		this.pieChartConfig.data = this.pieData;
		setTimeout(() => {
			this.lineChartObj = new Chart(this.lineChartRef.nativeElement, this.lineChartConfig);
			this.pieChartObj = new Chart(this.pieChartRef.nativeElement, this.pieChartConfig);
		});
	}

}
