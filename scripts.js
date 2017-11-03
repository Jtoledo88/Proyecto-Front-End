/*//bloque 1
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/1/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleIV = "" + r.title + "<br />"
var infoIV = "<strong>Sinopsis: </strong>" + r.opening_crawl + "<br />"
var date4 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director4 = "<strong>Director:</strong> " + r.director + "<br />"
var producer4 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleIV").innerHTML = titleIV;
document.getElementById("infoIV").innerHTML = infoIV;
document.getElementById("date4").innerHTML = date4;
document.getElementById("director4").innerHTML = director4;
document.getElementById("producer4").innerHTML = producer4;

//bloque 2
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/2/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleV = "" + r.title + "<br />"
var infoV = "" + r.opening_crawl + "<br />"
var date5 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director5 = "<strong>Director:</strong> " + r.director + "<br />"
var producer5 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleV").innerHTML = titleV;
document.getElementById("infoV").innerHTML = infoV;
document.getElementById("date5").innerHTML = date4;
document.getElementById("director5").innerHTML = director5;
document.getElementById("producer5").innerHTML = producer5;

//bloque 3
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/3/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleVI = "" + r.title + "<br />"
var infoVI = "" + r.opening_crawl + "<br />"
var date6 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director6 = "<strong>Director:</strong> " + r.director + "<br />"
var producer6 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleVI").innerHTML = titleVI;
document.getElementById("infoVI").innerHTML = infoVI;
document.getElementById("date6").innerHTML = date4;
document.getElementById("director6").innerHTML = director6;
document.getElementById("producer6").innerHTML = producer6;

//bloque 4
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/4/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleI = "" + r.title + "<br />"
var infoI = "" + r.opening_crawl + "<br />"
var date1 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director1 = "<strong>Director:</strong> " + r.director + "<br />"
var producer1 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleI").innerHTML = titleI;
document.getElementById("infoI").innerHTML = infoI;
document.getElementById("date1").innerHTML = date4;
document.getElementById("director1").innerHTML = director6;
document.getElementById("producer1").innerHTML = producer6;

//bloque 5
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/5/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleII = "" + r.title + "<br />"
var infoII = "" + r.opening_crawl + "<br />"
var date2 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director2 = "<strong>Director:</strong> " + r.director + "<br />"
var producer2 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleII").innerHTML = titleII;
document.getElementById("infoII").innerHTML = infoII;
document.getElementById("date2").innerHTML = date4;
document.getElementById("director2").innerHTML = director6;
document.getElementById("producer2").innerHTML = producer6;

//bloque 6
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/6/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleIII = "" + r.title + "<br />"
var infoIII = "" + r.opening_crawl + "<br />"
var date3 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director3 = "<strong>Director:</strong> " + r.director + "<br />"
var producer3 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleIII").innerHTML = titleIII;
document.getElementById("infoIII").innerHTML = infoIII;
document.getElementById("date3").innerHTML = date4;
document.getElementById("director3").innerHTML = director6;
document.getElementById("producer3").innerHTML = producer6;

//bloque 7
var title = new XMLHttpRequest();
title.open("GET", "https://swapi.co/api/films/7/",false);
title.send(null);

var r = JSON.parse(title.response);
var titleVII = "" + r.title + "<br />"
var infoVII = "" + r.opening_crawl + "<br />"
var date7 = "<strong>Release:</strong> " + r.release_date + "<br />"
var director7 = "<strong>Director:</strong> " + r.director + "<br />"
var producer7 = "<strong>Producer:</strong> " + r.producer + "<br />"
document.getElementById("titleVII").innerHTML = titleVII;
document.getElementById("infoVII").innerHTML = infoVII;
document.getElementById("date7").innerHTML = date4;
document.getElementById("director7").innerHTML = director6;
document.getElementById("producer7").innerHTML = producer6;

/*var root = "https://swapi.co/api/films/1/"
$.ajax({
    url: root,
}).then(function(data){
    var Titulo = document.getElementsByClassName("card-title1");
    console.log(data);

    for(var i=0; i< data.length; i++){
        var miTitulo = document.createElement("DIV");
        var texto = document.createTextNode(data[i].title);
        miTitulo.appendChild(texto);
        Titulo.appendChild(miTitulo);
    }
});
*/
$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';

    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            // alert(data);
            console.log(data);
            var html = '';
        for(var i=0; i< data.results.length.characters.length; i++) {

             html += '<div class="col-lg-4 col-md-6 mb-4">'
             html +=  '<div class="card-body">'
             html += '<ul>' + data.results[i].characters[i] + '</ul>'
             html +=    '</div>'
             html += '</div>';
        }
            console.log(html);
            $("#peliculas").html(html);
        },
        error: function (e) {
            console.log(e);
        },
    });

 
   


});
