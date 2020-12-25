export const lineChartConfig = {
	type: 'line',
	options: {
		responsive: true,
		title: {
			display: false
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Years'
				},
				gridLines: {
				  display: true ,
				  color: "#3c3c3c"
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Movies'
				},
				gridLines: {
				  display: true ,
				  color: "#3c3c3c"
				}
			}]
		}
	}
}