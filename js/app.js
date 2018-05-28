$(function(){

let urlApi = 'https://api.fixer.io/latest?base=AUD';
let from = document.querySelector('.from');
let to = document.querySelector('.to');

function loadCurrencies() {

    $.get('https://api.fixer.io/latest?base=ZAR', function(response){
        let rates = response.rates;
        let currencies = '';
        for(let key in rates) {
          
            currencies += '<option val=' + key + '>' + key + '</option>'
        }
        from.innerHTML = currencies
        to.innerHTML = currencies
    });   
};
function currenciesChange() {

    $('.from').change(function(){
        var value = $('.from').val();
        console.log(value);
        $.get('https://api.fixer.io/latest?base=' + value, function(newRates){
            rates = newRates.rates;
            console.log(rates);
            
        });
    }); 
} 


currenciesChange();
loadCurrencies();
});
    
     




