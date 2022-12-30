var options = {
	series: [
	{
		name: "URL Oluşturma Tarihi",
		data: [2020, 2001, 2002, 2001, 2019, 2018, 2010, 2009, 2006, 2002, 2008, 2003]
	},
	{
		name: "URL Son Geçerlilik Tarihi",
		data: [2020, 2001, 2002, 2018, 2019, 2018, 2008, 2009, 2006, 2007, 2008, 2005]
	}
	],
	chart: {
		height: 300,
		type: 'line',
		zoom: {
			enabled: false,
		},
		dropShadow: {
			enabled: true,
			color: '#000',
			top: 18,
			left: 7,
			blur: 16,
			opacity: 0.2
		},
		toolbar: {
			show: false
		}
	},
	colors: ['#f0746c', '#255cd3'],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: [3,3],
		curve: 'smooth'
	},
	grid: {
		show: false,
	},
	markers: {
		colors: ['#f0746c', '#255cd3'],
		size: 5,
		strokeColors: '#ffffff',
		strokeWidth: 2,
		hover: {
			sizeOffset: 2
		}
	},
	xaxis: {
		categories: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
		labels:{
			style:{
				colors: '#8c9094'
			}
		}
	},
	yaxis: {
		min: 2000,
		max: 2022,
		labels:{
			style:{
				colors: '#8c9094'
			}
		}
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		floating: true,
		offsetY: 0,
		labels: {
			useSeriesColors: true
		},
		markers: {
			width: 10,
			height: 10,
		}
	}
};

var options2 = {
	series: [{
		name: 'Sayı',
		data: [{
			x: 'Pazartesi',
			y: 21
		}, {
			x: 'Salı',
			y: 22
		}, {
			x: 'Çarşamba',
			y: 10
		}, {
			x: 'Perşembe',
			y: 28
		}, {
			x: 'Cuma',
			y: 16
		}, {
			x: 'Cumartesi',
			y: 21
		}, {
			x: 'Pazar',
			y: 13
		}],
	}],
	chart: {
		height: 70,
		type: 'bar',
		toolbar: {
			show: false,
		},
		sparkline: {
			enabled: true
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '25px',
			distributed: true,
			endingShape: 'rounded',
		}
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
	},
	xaxis: {
		type: 'category',
		lines: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		labels: {
			show: false,
		},
	},
	yaxis: [{
		y: 0,
		offsetX: 0,
		offsetY: 0,
		labels: {
			show: false,
		},
		padding: {
			left: 0,
			right: 0
		},
	}],
};

var options3 = {
	series: [{
		name: 'Sayı',
		data: [{
			x: 'Pazartesi',
			y: 10
		}, {
			x: 'Salı',
			y: 8
		}, {
			x: 'Çarşamba',
			y: 15
		}, {
			x: 'Perşembe',
			y: 12
		}, {
			x: 'Cuma',
			y: 20
		}, {
			x: 'Cumartesi',
			y: 14
		}, {
			x: 'Pazar',
			y: 7
		}],
	}],
	colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
	chart: {
		height: 70,
		type: 'bar',
		toolbar: {
			show: false,
		},
		sparkline: {
			enabled: true
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '25px',
			distributed: true,
			endingShape: 'rounded',
		}
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
	},
	xaxis: {
		type: 'category',
		lines: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		labels: {
			show: false,
		},
	},
	yaxis: [{
		y: 0,
		offsetX: 0,
		offsetY: 0,
		labels: {
			show: false,
		},
		padding: {
			left: 0,
			right: 0
		},
	}],
};

var options4 = {
	series: [50, 90, 70, 80],
	chart: {
		height: 350,
		type: 'radialBar',
	},
	colors: ['#003049', '#d62828', '#f77f00', '#fcbf49', '#e76f51'],
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Total',
					formatter: function (w) {
						return 260
					}
				}
			}
		}
	},
	labels: ['link1', 'link2', 'link3', 'link4'],
};

var options5 ={
	series: [50, 90, 70, 80],
	chart: {
		height: 350,
		type: 'radialBar',
	},
	colors: ['#e45e9f', '#c100e8', '#e4c00c', '#bb284c', '#fc6500'],
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Total',
					formatter: function (w) {
						return 260
					}
				}
			}
		}
	},
	labels: ['kullanıcı1', 'kullancıı2', 'kullanıcı', 'kullanıcı'],
};

var options6 ={
	series: [50, 90, 70, 80, 90, 70, 80],
	chart: {
		height: 350,
		type: 'radialBar',
	},
	colors: ['#e45e9f', '#c100e8', '#e4c00c', '#bb284c', '#fc6500', '#c100e8', '#e4c00c'],
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Total',
					formatter: function (w) {
						return 260
					}
				}
			}
		}
	},
	labels: ['1', '2', '3', '4','5','6',,'7'],

};


var chart = new ApexCharts(document.querySelector("#activities-chart"), options);
chart.render();

var chart2 = new ApexCharts(document.querySelector("#appointment-chart"), options2);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#surgery-chart"), options3);
chart3.render();

var chart4 = new ApexCharts(document.querySelector("#diseases-chart"), options4);
chart4.render();

var chart5 = new ApexCharts(document.querySelector("#diseases2-chart"), options5);
chart5.render();

var chart6 = new ApexCharts(document.querySelector("#diseases3-chart"), options6);
chart6.render();



// datatable init
$('document').ready(function(){
	$('.data-table').DataTable({
		scrollCollapse: false,
		autoWidth: false,
		responsive: true,
		searching: false,
		bLengthChange: false,
		bPaginate: true,
		bInfo: false,
		columnDefs: [{
			targets: "datatable-nosort",
			orderable: false,
		}],
		"lengthMenu": [[5, 25, 50, -1], [5, 25, 50, "All"]],
		"language": {
			"info": "_START_-_END_ of _TOTAL_ entries",
			searchPlaceholder: "Search",
			paginate: {
				next: '<i class="ion-chevron-right"></i>',
				previous: '<i class="ion-chevron-left"></i>'
			}
		},
	});
});