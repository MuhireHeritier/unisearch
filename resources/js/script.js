
window.onload = function(){

var request ='';
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
    
}
else{
    request = new ActiveXObject("Microsoft, XMLHTTP");
}
request.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2009:2015',true);

request.onload = function(){
    if((request.readyState=== 4) && (request.status===200)){
        var items=[], date=[];
        for(var i=0; i<6; i++){
            var responsePercentage= parseFloat(request.responseXML.getElementsByTagName('wb:value')[i].firstChild.nodeValue);
            var responseDate = parseFloat(request.responseXML.getElementsByTagName('wb:date')[i].firstChild.nodeValue);
            items.push(responsePercentage);
            date.push(responseDate)
        }
        console.log(items);
        console.log(date);
        
        
        
        var myChart = document.getElementById('myChart').getContext('2d');            
            var pupulateChart = new Chart(myChart,{
                type: 'bar',
                data:{
                    labels:[date[5],date[4],date[3],date[2],date[1],date[0]],
                    datasets:[{
                        label:'United Kingdom',
                        data:[
                            items[5],
                            items[4],
                            items[3],
                            items[2],
                            items[1],
                            items[0]                         
                            
                        ],
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
                        text:'Total Enrolment in UK',
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
         
        
//        var items = request.responseXML.getElementsByTagName('wb:value'); 
//        var result = document.createElement("ul");
//        for(var i =0; i <items.length; i++){
//            var item = document.createElement("li");
//            result.appendChild(item);
//            //result += '<li>'+
//                //items[i].firstChild.nodeValue +'</li>';
//            //document.appendChild(result);
//             //console.log(parseFloat(request.responseXML.getElementsByTagName('wb:value')[1].firstChild.nodeValue));
//        }
//        result += '</ul>';
        
        //document.getElementById('update').innerHTML = result;
        }
    }
request.send();

}

//----------------------------------------------------------------------------------------------------------------------


$(document).ready(function(){
    $("#agriculture").click(function(){
            var request ='';
            if(window.XMLHttpRequest){
                request = new XMLHttpRequest();

            }
            else{
                request = new ActiveXObject("Microsoft, XMLHTTP");
            }
            request.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F600?date=2009:2015',true);

            request.onload = function(){
                if((request.readyState=== 4) && (request.status===200)){
                    var items=[], date=[];
                    for(var i=0; i<6; i++){
                        var responsePercentage= parseFloat(request.responseXML.getElementsByTagName('wb:value')[i].firstChild.nodeValue);
                        var responseDate = parseFloat(request.responseXML.getElementsByTagName('wb:date')[i].firstChild.nodeValue);
                        items.push(responsePercentage);
                        date.push(responseDate)
                    }
                    console.log(items);
                    console.log(date);



                    var myChart = document.getElementById('myChart').getContext('2d');            
                        var pupulateChart = new Chart(myChart,{
                            type: 'bar',
                            data:{
                                labels:[date[5],date[4],date[3],date[2],date[1],date[0]],
                                datasets:[{
                                    label:'Agriculture',
                                    data:[
                                        items[5],
                                        items[4],
                                        items[3],
                                        items[2],
                                        items[1],
                                        items[0]                         

                                    ],
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
                }
request.send();
    });
});
