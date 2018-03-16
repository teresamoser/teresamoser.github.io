
var section = document.querySelector('section');
var request = new XMLHttpRequest();           

request.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
request.responseType = 'json';
request.send();
            
request.onload = function () {
    var towndata = request.response;
    showData(towndata);
}
            
function showData(jsonObj) {
    var towns = jsonObj['towns'];
                
    for (var i = 0; i < towns.length; i++){
     var myH2 = document.createElement('h2');
     var myPara1 = document.createElement('p');
     var myPara1 = document.createElement('p');
     var myPara1 = document.createElement('p');
                    
     myH2.textContent = towns[i].name;
     myPara1.textContent ='Motto: ' + towns[i].motto;
     myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
     myPara3.textContent = 'Average Rainfall: '+ towns[i].averageRainfall;
     }
                    
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
                
    section.appendChild(myArticle);
    }
               