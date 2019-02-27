var cors = "https://cors-anywhere.herokuapp.com/";

var listUni = document.getElementById("list");
var labels = [];
var countryIso = "ZAF";
var code = ["SE.TER.ENRL","UIS.FOSEP.56.F600","UIS.FOSEP.56.F140","UIS.FOSEP.56.F500","UIS.FOSEP.56.F700","UIS.FOSEP.56.F200","UIS.FOSEP.56.FUK","UIS.FOSEP.56.F400","UIS.FOSEP.56.F800","UIS.FOSEP.56.F300"]
$(listUni).on("change",function(){
   console.log(listUni.value);
    switch(listUni.value){
        case '-1':
            document.getElementById("myChart").style.display= "none"
        case "0":
        sendStat(code[0], "All Programmes")
        break;
        case "1":
            sendStat(code[1], "Agriculture")
            break;
        case "2":
            sendStat(code[2], "Education")
            break;
        case "3":
            sendStat(code[3], "Engineering")
            break;
        case "4":
            sendStat(code[4], "Health")
            break;
        case "5":
            sendStat(code[5], "Humanities")
            break;
        case "6":
            sendStat(code[6], "Unspecified")
            break;
        case "7":
            sendStat(code[7], "Science")
            break;
        case "8":
            sendStat(code[8], "Services")
            break;
        case "9":
            sendStat(code[9], "Social")
            break;
    default:
    console.log("error")
    
}
});

function sendStat(code, label) {
    /* your code here */
    var stat1 = new XMLHttpRequest();
    stat1.onreadystatechange = function() {
                  console.log(stat1.response)
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(stat1.response);
            var data = [];
            for (i = 0; i < json[1].length; i++) {
                data.push(json[1][i].value);
            }
  
            showChart(data, label);
        }
    };
    stat1.open("GET", cors+"https://api.worldbank.org/v2/countries/" + countryIso + "/indicators/" + code + "?date=2010:2015&format=json", true);
    stat1.send();
};
    
function showChart(d, l)  {   
    $("#myChart").remove();
    $("#programs").append('<canvas id="myChart"></canvas>');
    document.getElementById("myChart").style.display= "inline"
   var myChart = document.getElementById('myChart').getContext('2d');            
                        var populateChart = new Chart(myChart,{
                            type: 'bar',
                            data:{
                                labels:["2011","2012","2013","2014","2015"],
                                datasets:[{
                                    label:l,
                                    data:d,
                                    backgroundColor:[
                                        'rgba(100, 100, 200, 0.3)',
                                        'rgba(154, 62, 235, 1)',
                                        'rgba(254, 62, 235, 1)',
                                        'rgba(54, 62, 235, 1)',
                                        'rgba(15, 222, 235, 1)',
                                        'rgba(200, 162, 135, 1)'
                                    ],
                                    borderWidth: 1,
                                    borderColor:'#777',
                                    hoverBorderColor:'#000'
                                }]

                            },
                            options:{
                                title:{
                                    display:true,
                                    text:'Total Enrolment in Agiculture',
                                    fontSize:20
                                },
                                legend:{
                                    display:true,
                                    position:'right',
                                    labels:{
                                        fontColor:'#000'
                                    }
                                },
                                layout:{
                                    padding:{
                                        left:50,
                                        right:0,
                                        bottom:0,
                                        top:0
                                    }
                                },
                                tooltips:{
                                    enabled:true
                                }
                            }
                        });
                    }

// implementing the cross script statistics countries
//var countryLink = ["https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2010:2015&format=json",
//                   "https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/MUS/indicators/SE.TER.ENRL?date=2010:2015&format=json",
//                   "https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/ZAF/indicators/SE.TER.ENRL?date=2010:2015&format=json"
//                  ];
//    
//    var domEl = document.getElementsByTagName('canvas');
//    request.onreadystatechange = function(){
//		if(request.readyState == 4 && request.status == 200){
//			var response = JSON.parse(request.responseText);
//			console.log(response);
//			var stats = response[1][0].value;
//
//			document.getElementById('myChart').innerHTML = stats;
//				
//		}
//
//		
//	}
//    for(var i=0; i<countryIso.length;i++){
//        if(domEl[i].parentNode.countryiso3code: "GBR"){
//            requestD.open('GET',countryIso[i],true);
//        break;
//        }
//        if(domEl[i].parentNode.countryiso3code: "MUS"){
//           requestD.open('GET',countryIso[i],true); 
//            break;
//        }
//        if(domEl[i].parentNode.countryiso3code: "ZAF"){
//           requestD.open('GET',countryIso[i],true);  
//            break;
//        }
//    }

                           