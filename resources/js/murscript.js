var countryN = ["Rwanda","Mauritius"];
window.onload = function(){
    var request = new XMLHttpRequest();
    if(countryN)
	request.open('GET', 'https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country="countryN"',true);
	//var element = document.getElementsByTagName('canvas');

	request.onreadystatechange = function(){
		if(request.readyState=== 4 && request.status=== 200){
            
			var response = JSON.parse(request.responseText);
			console.log(response); 
            console.log(response.length)
            for(var i =0;i<response.length;i++){
                
                    var uni = '<table id="universities"><tr><th>'+Uni Name+'</th><th>'+Web page+'</th></tr><tr><td>'response[i].name+'</td><td><a target="_blank" href="'+response[i].web_pages+'">' + response[i].web_pages + '</a></td></tr></table>'
                    console.log(uni);
                    $('.unilink').append(uni);
                
            }
				
		}
    }
	request.send();
}


//window.onload = function(){
//    var request = new XMLHttpRequest();
//	request.open('GET', 'https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=Rwanda',true);
//	//var element = document.getElementsByTagName('canvas');
//
//	request.onreadystatechange = function(){
//		if(request.readyState=== 4 && request.status=== 200){
//            
//			var response = JSON.parse(request.responseText);
//			console.log(response); 
////			var info = response[2634].name +' link '+response[2634].web_pages;
////			//createChart(0,info);
////            console.log(info);
//			//document.getElementById('myChart').innerHTML = info;
//            console.log(response.length)
//            for(var i =0;i<response.length;i++){
//                
//                    var uni = '<div id="universities"><p>' + response[i].name + 
//                    '</p><p><a target="_blank" href="'+response[i].web_pages+'">' +response[i].web_pages + '</a></p></div>'
//                    console.log(uni);
//                    $('.unilink').append(uni);
//                
//            }
//				
//		}
//    }
//	request.send();
//}

//$("#usa-uni-search").keyup(function() {
//       var userInput, table, tableRow, filter, tableData;
//       userInput = document.getElementById("usa-uni-search");
//       filter  = userInput.value.toLowerCase();
//       table = document.getElementById("usa-uni-list");
//       tableRow = table.getElementsByTagName("tr");
//
//       for (var i = 0; i < tableRow.length; i++) {
//           tableData = tableRow[i].getElementsByTagName("td")[0];
//           if (tableData) {
//             if (tableData.innerHTML.toLowerCase().indexOf(filter) > -1) {
//               tableRow[i].style.display = "";
//             } else {
//               tableRow[i].style.display = "none";
//             }
//           }      
//       }
//   });