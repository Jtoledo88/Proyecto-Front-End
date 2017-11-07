$(document).ready(function () {
    var root = 'https://swapi.co/api/people/'

    cargarPersonajes(root);

    function cargarPersonajes(url) {

        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                console.log(data);
                $('#list').empty();
                var listado = document.getElementById('list');
                var html='';
                for (var i = 0; i < data.results.length; i++) {
                    var texto = document.createTextNode(data.results[i].name);
                    var elemLI = document.createElement("LI");
                    elemLI.appendChild(texto)
                    listado.appendChild(elemLI);
                    html += '<div class="col-md-4">'
                    html +=      '<h1 data-title="' + data.results[i].title +'" data-toggle="modal" data-target="#exampleModal">'+ data.results[i].title +'</h1>'
                   
                    html +=  '</div>';
                }
                console.log(html);
                $("#prev").on('click', function (e) {
                    e.preventDefault();
                    if (data.previous != null)
                        cargarPersonajes(data.previous);
                });
                $("#next").on('click', function (e) {
                    e.preventDefault();
                    if (data.next != null)
                        cargarPersonajes(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },

        });
        $('#exampleModal').on('show.bs.modal', function (e){
            $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
        });
    }
    
});



