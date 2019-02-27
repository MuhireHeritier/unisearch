var cors = "https://cors-anywhere.herokuapp.com/"
var listUni = document.getElementById("list");
var labels = [];
var countryIso = "GBR";   
var code = ["SE.TER.ENRL","UIS.FOSEP.56.F600","UIS.FOSEP.56.F140","UIS.FOSEP.56.F500","UIS.FOSEP.56.F700","UIS.FOSEP.56.F200","UIS.FOSEP.56.FUK","UIS.FOSEP.56.F400","UIS.FOSEP.56.F800","UIS.FOSEP.56.F300"];
$(listUni).on("change",function(){
    switch(listUni.value){
        case '-1':
            document.getElementById("myChart").style.display= "none"
        case "0":
        getData(code[0], "All Programmes")
        break;
        case "1":
            getData(code[1], "Agriculture")
            break;
        case "2":
            getData(code[2], "Education")
            break;
        case "3":
            getData(code[3], "Engineering")
            break;
        case "4":
            getData(code[4], "Health")
            break;
        case "5":
            getData(code[5], "Humanities")
            break;
        case "6":
            getData(code[6], "Unspecified")
            break;
        case "7":
            getData(code[7], "Science")
            break;
        case "8":
            getData(code[8], "Services")
            break;
        case "9":
            getData(code[9], "Social")
            break;
    default:
    console.log("error")
    
}
});

function getData(code, label) {
    var requestD = new XMLHttpRequest();
    requestD.onreadystatechange = function() {
        console.log(requestD.response);
        if (this.readyState == 4 && this.status == 200) {
            var responseT = JSON.parse(requestD.response);
            var data = [];
            for (i = 0; i < responseT[1].length; i++) {
                data.push(responseT[1][i].value);
            }
  
            showChart(data, label);
        }
    };
    requestD.open("GET", cors+"https://api.worldbank.org/v2/countries/"+countryIso+"/indicators/"+code+"?date=2010:2015&format=json", true);
    requestD.send();
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
                                    text:'',
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

