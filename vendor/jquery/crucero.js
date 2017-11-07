$(document).ready(function () {
    var root = 'https://swapi.co/api/starships/';

    cargarCruceros(root);
    
    function cargarCruceros(url){

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
             html +=             '<h4>' + data.results[i].name + '</h4>'
             html +=                 '<p class="card-text">' 
             html +=                    '<i><strong>Model: </strong>' + data.results[i].model + '</i><br>'
             html +=                        '<i><strong>Manufacturer: </strong>' + data.results[i].manufacturer + '</i><br>'
             html +=                            '<i><strong>Crew: </strong>' + data.results[i].crew + '</i><br>'
             html +=                                '<i><strong>Passengers: </strong>' + data.results[i].passengers + '</i>'
             html +=                  '</p>' 
             html +=        '</div>'
             html +=    '</div>'
             html += '</div>';
        }
            console.log(html);
            $("#cruceros").html(html);

            $("#prev").on('click', function(e){
                e.preventDefault();
               if(data.previous!=null)
               cargarCruceros(data.previous);
            });
            $("#next").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                cargarCruceros(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });

  
}

});

