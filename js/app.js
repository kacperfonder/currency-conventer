let urlApi = 'https://api.fixer.io/latest'

  
$.ajax({
    url: urlApi,
    method: "GET",
    dataType: "json"
  })
    .done(function(response) {
      console.log(response);
    });


// $.ajax({
//     url: urlApi, 
//     type: "GET",
//     success: function(result){
//         $('img').attr('src',result.icon_url);
//         $('.jokeContent').text(result.value)
// }});  

