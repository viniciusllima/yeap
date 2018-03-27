(function () {
  // -- Vanilla JS

  require('./test');
  const $ = require('jquery');
   
  // https://www.raphaelfabeni.com.br/rv/hotels.json

  
  const splitHotel = (dataObj, priceInit, priceEnd, rate) => {
    $(dataObj.hotels).each(function(index) {
      console.log(priceInit, priceEnd, dataObj.hotels[index].price, dataObj.hotels[index].rate) ;
      if((dataObj.hotels[index].price <= priceEnd && dataObj.hotels[index].price >= priceInit) && dataObj.hotels[index].rate === rate) {
        console.log(dataObj.hotels[index]);
      }
    });
  }

  $.ajax({
    url : 'https://www.raphaelfabeni.com.br/rv/hotels.json',
    type : 'GET',
    success : function(data) {      
      splitHotel(data, 100, 900, 3);
    },
    error : function(jqXHR, textStatus) {
      console.log(jqXHR);
    }
  })

  
  

}());
