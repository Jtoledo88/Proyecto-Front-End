$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';



    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            // alert(data);
            console.log(data);
            var html = '';
        for(var i=0; i< data.results.length; i++) {

             html += '<div class="col-lg-4 col-md-6 mb-4">'
             html += '<div class="card">'
             html +=    '<img class="card-img-top" src="vendor/' + data.results[i].episode_id + '.jpg" alt="">'
             html +=  '<div class="card-body">'
             html += '<h4>' + data.results[i].title + '</h4>'
             html +=     '<p class="card-text">' 
             html += '<i><strong>Episode: </strong>' + data.results[i].episode_id + '</i><br>'
             html += '<i><strong>Release Date: </strong>' + data.results[i].release_date + '</i><br>'
             html += '<i><strong>Director: </strong>' + data.results[i].director + '</i><br>'
             html += '<i><strong>Producer: </strong>' + data.results[i].producer + '</i>'
             html += '<p>' + data.results[i].opening_crawl.substring(0, 150) + '...</p>'
             html += '</p>' 
             html +=   '</div>'
             html +=   '<div class="card-footer">'
             html +=   '<a href="#" class="btn btn-danger" id="btn" data-title="' + data.results[i].title + '"data-body="' + '<i><strong>Episode: </strong>' + data.results[i].episode_id + '</i><br>'+ '<i><strong>Release Date: </strong>' + data.results[i].release_date + '</i><br>' + '<i><strong>Director: </strong>' + data.results[i].director + '</i><br>' + '<i><strong>Producer: </strong>' + data.results[i].producer + '</i><br>' + '<i><strong>Sinopsis: </strong>' + data.results[i].opening_crawl + '</i>'
                  + '"data-list="' + 
                  '<i><strong>List of Character: </strong>' 
                //creo que aca deberia hacer un for con una nueva variable para que me busque la data que se encuentra en la url de character
                  + data.results[i].characters + '" data-toggle="modal" data-target="#exampleModal">Find Out More!</a>'
                 
                               
                  
             html +=  '</div>'
             html +=  '</div>'
             html +=   '</div>'
                html += '</div>';
        }
            console.log(html);
            $("#peliculas").html(html);
        },
        error: function (e) {
            console.log(e);
        },
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-body').html($(e.relatedTarget).data('body'));
    });
    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-list').html($(e.relatedTarget).data('list'));
    });
   


});

