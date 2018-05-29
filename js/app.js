$(function(){

let from = document.querySelector('.from');
let to = document.querySelector('.to');
let input = document.querySelector('.input')

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
};
function convert () {

    $('form').on('submit', function(e) {
        e.preventDefault();

        let convertTo = $('.to').val();
        let amount = $('.input').val();
        let calc = amount * rates;
        $('.result').push(parseFloat(calc));
        console.log(convertTo , calc);
        
    });
};

convert();
currenciesChange();
loadCurrencies();
});
    
     




