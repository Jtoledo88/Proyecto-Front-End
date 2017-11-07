$(document).ready(function () {
    var root = 'https://swapi.co/api/planets/';

    cargarPlanets(root);
    
    function cargarPlanets(url){

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
             html +=                    '<i><strong>Diameter: </strong>' + data.results[i].diameter + '</i><br>'
             html +=                        '<i><strong>Climate: </strong>' + data.results[i].climate + '</i><br>'
             html +=                            '<i><strong>Terrain: </strong>' + data.results[i].terrain + '</i><br>'
             html +=                                '<i><strong>Surface Water: </strong>' + data.results[i].surface_water + '</i><br>'
             html +=                                    '<i><strong>Population: </strong>' + data.results[i].population + '</i>'
             html +=                  '</p>' 
             html +=        '</div>'
             html +=    '</div>'
             html += '</div>';
        }
            console.log(html);
            $("#planetas").html(html);

            $("#prev").on('click', function(e){
                e.preventDefault();
               if(data.previous!=null)
               cargarPlanets(data.previous);
            });
            $("#next").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                cargarPlanets(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });

  
}

});

