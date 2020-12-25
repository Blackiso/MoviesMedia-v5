export const pieChartConfig = {
	type: 'doughnut',
	options: {
		responsive: true,
		legend: {
			position: 'bottom',
			boxWidth: 10,
			labels: {
				fontColor: '#c1c0c0'
			}
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		elements: {
			arc: {
				borderWidth: 1,
				borderColor: '#3c3c3c'
			}
	    }
	}
}