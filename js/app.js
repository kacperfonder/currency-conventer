$(function(){

let urlApi = 'https://api.fixer.io/latest?base=AUD';
let from = document.querySelector('.from');
let to = document.querySelector('.to');

function loadCurrencies() {

    $.ajax({
        url: urlApi,
        method: "GET",
        dataType: "json"
    })
    .done(function(response) {
        console.log(response); 
        let rates = response.rates;
        let currencies = '';
        for(let key in rates) {
          
            currencies += '<option val=' + key + '>' + key + '</option>'
        }
        from.innerHTML = currencies
        to.innerHTML = currencies
    });  
};
    $('.from').change(function(){
        let value = $('from').val();
        
        
        $.get('https://api.fixer.io/latest?base='+value, function(newRates){
            rates = newRates.rates
        })
    })


loadCurrencies();
});
    
     




