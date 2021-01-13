const price = $('#price')



$.ajax ({
    method: 'GET',
    url: 'https://blockchain.info/ticker'
}).done(function(response) {
    var lastUSD= (response.USD.last)
    price.append('$'+ lastUSD)
    console.log(response)
  });




  


