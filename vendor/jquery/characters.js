$(document).ready(function () {
    var root = 'https://swapi.co/api/people/';

    cargarCharacters(root);
    
    function cargarCharacters(url){


        
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            // alert(data);
            console.log(data);
            var html = '';
            
        for(var i=0; i< data.results.length; i++) {

             html += '<div class="col-lg-4 col-md-6 mb-4">'
             html +=    '<div class="card">'
             html +=        '<div class="card-body">'
             html +=             '<h3>' + data.results[i].name + '</h3>'
             html +=                 '<p class="card-text">' 
             html +=                    '<i><strong>Species: </strong>'               
             html +=                         obtenerSpecie(data.results[i].species)
             html +=                             '</i><br>'
             html +=                        '<i><strong>Clasification: </strong>' 
             html +=                       obtenerClassification(data.results[i].species) + '</i><br>'
             html +=                            '<i><strong>Planet: </strong>' + obtenerPlanet(data.results[i].homeworld) + '</i><br>'
             html +=                                '<i><strong>lenguage: </strong>' + obtenerLanguage(data.results[i].species) + '</i><br></p>' 
             html +=    '<ul>';
             for(var j=0; j < data.results[i].films.length; j++){
                html += cargarPeliculasPersonaje(data.results[i].films[j]);
            }
             html +=        '</ul></div>'
             html +=    '</div>'
             html += '</div>';
        }
            console.log(html);
            $("#character").html(html);

            $("#prev").on('click', function(e){
                e.preventDefault();
               if(data.previous!=null)
               cargarCharacters(data.previous);
            });
            $("#next").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                cargarCharacters(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });
    function obtenerSpecie(url){
        console.log(url);
        var characterSpecie = '';

        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
                characterSpecie = data.name;
            },
            error: function(e) {
                console.log(e);
            },
        });
      return characterSpecie;  
    }
    function obtenerClassification(url){
        console.log(url);
        var characterClassification = '';

        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
                characterClassification = data.classification;
            },
            error: function(e) {
                console.log(e);
            },
        });
      return characterClassification;  
    }
    function obtenerPlanet(url){
        console.log(url);
        var characterPlanet = '';

        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
                characterPlanet = data.name;
            },
            error: function(e) {
                console.log(e);
            },
        });
      return characterPlanet;  
    }
    function obtenerLanguage(url){
        console.log(url);
        var characterLanguage = '';

        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
                characterLanguage = data.language;
            },
            error: function(e) {
                console.log(e);
            },
        });
      return characterLanguage;  
    }
    function cargarPeliculasPersonaje(url){
        console.log(url);
        var nombreFilms = '';

        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
                nombreFilms ='<li><i><strong>Episodio:</strong></i> ' + data.episode_id + ',<i><strong> Titulo: </strong></i>'+ data.title + '</li>';
            },
            error: function(e) {
                console.log(e);
            },
        });
      return nombreFilms;  
    }
}

});

 