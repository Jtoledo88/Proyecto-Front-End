$(document).ready(function () {
    var root = 'https://swapi.co/api/vehicles/';

    cargarVehicles(root);
    
    function cargarVehicles(url){

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
             html +=                    '<i><strong>Model: </strong>' + data.results[i].model + '</i><br>'
             html +=                        '<i><strong>Length: </strong>' + data.results[i].length + '</i><br>'
             html +=                            '<i><strong>Crew: </strong>' + data.results[i].crew + '</i><br>'
             html +=                                '<i><strong>Passenger: </strong>' + data.results[i].passengers + '</i><br>'
             html +=                                    '<i><strong>Class: </strong>' + data.results[i].vehicle_class + '</i>'
             html +=                  '</p>' 
             html +=        '</div>'
             html +=    '</div>'
             html += '</div>';
        }
            console.log(html);
            $("#vehiculos").html(html);

            $("#prev").on('click', function(e){
                e.preventDefault();
               if(data.previous!=null)
               cargarVehicles(data.previous);
            });
            $("#next").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                cargarVehicles(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });

  
}

});

