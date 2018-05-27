let urlApi = 'http://api.nbp.pl/api/'

$(function() {

$.ajax({
    url: urlApi,
    method: "GET",
    dataType: "json"
  })
    .done(function(response) {
      console.log(response);
    });
});

