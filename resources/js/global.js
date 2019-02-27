
var request = new XMLHttpRequest();

var cors = 'https://cors-anywhere.herokuapp.com/'

var mauritius = 'MUS';
var uk = 'GBR';
var finland = 'FIN';

var agriculture = 'UIS.FOSEP.56.F600' 
var education = 'UIS.FOSEP.56.F140'
var engineering = 'UIS.FOSEP.56.F500'
var health = 'UIS.FOSEP.56.F700'
var humanities = 'UIS.FOSEP.56.F200'
var sciences = 'UIS.FOSEP.56.F400'
var services = 'UIS.FOSEP.56.F800'
var business= 'UIS.FOSEP.56.F300'

window.onload = function(){

	var uk = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2015';
    var mauritius = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/MUS/indicators/SE.TER.ENRL?date=2015';
	var france = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/FIN/indicators/SE.TER.ENRL?&date=2015';
	
	var element = document.getElementsByTagName('canvas');

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var response = JSON.parse(request.responseText);
			console.log(response);
			var info = response[1][0].value;
			//createChart(0,info);
            console.log(info);
			document.getElementById('myChart').innerHTML = info;
				
		}

		
	}
	if (element[0].parentNode.id == 'mus') {
		request.open('GET',mauritius,true);
	}
	else if (element[0].parentNode.id == 'uk') {
		request.open('GET',uk,true);
    }
	else if (element[0].parentNode.id == 'fra'){
		request.open('GET',france,true);
    }

	request.send();
}

function checkStats(code, country){

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var response = JSON.parse(request.responseText);
			console.log(response);
			var info = response[1][0].value;
			createChart(info,100);
			//console.log(request.responseXML);
			//var info = request.responseXML.getElementsByTagName("wb:value")[0].firstChild.nodeValue		
		}

		
	}
	request.open('GET',cors+'http://api.worldbank.org/v2/countries/'+country+'/indicators/'+code+'?format=json&date=2015',true);
	request.send();

}

function createChart(data, total){
	var ctx = document.getElementById("myChart").getContext('2d');
	console.log(ctx);
	var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["%both sexes", "total students"],
        ticks:false,
        datasets: [{
            label: 'Terciary Education Enrolment',
            data: [data, total],
            backgroundColor: [
                '#008ecc',
                '#E9D700',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: { 
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}