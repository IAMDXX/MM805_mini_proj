

$(document).ready(() => {
  let $button = $('button[type="submit"]');

  $button.on('click', function () {
    $('.results').empty();
    var $this = $(this);
    var c = selected.country;
    var v = selected.variety;
    var p = parseInt(selected.price);
    if (p <= 50){
      var h = p+5;
      var l = p-5;
    }
    else if(p>50){
      h = 100;
      l = 51;
    }
    var items = [];
    if ($this.hasClass('active') || $this.hasClass('success')) {
      return false;
    }
    $this.addClass('active');
    $this.addClass('loader');
    console.log("start reading json!!!");

    // Begin Searching
    $.getJSON("../json/wine-data.json", function(data){
      $.each( data, function( key, val ) {
        if (items.length <=5){
          if ((val.variety != null) && (val.variety == v)){ 
              if ((val.country != null) && (val.country== c)){ 
                  if ((val.price != null) && (l<= parseInt(val.price))&&(parseInt(val.price) <= h)){ 
                      // console.log(val.country,val.variety,val.price,l,h)
                      items.push( "<li id='" + key + "'>"  
                      + "<br>" +" Name: "+ val.title 
                      + "<br>" + " Score: "+ val.points 
                      + "<br>" + " Price: "+ val.price
                      + "<br>" + " Desctiption: "+ val.description + "</li>" ); 
                  } 
              }
          }
        }
        else {
          return false;
        }      
      }); 
      // load results
      if (items.length == 0){
        console.log(" Nooooooooo ");
        items.push("No Results")

      }
      $( "<ul/>", {
      "class": "output",
      html: items.join( "" )
      }).appendTo( "div.results" );

      // END Searching
      $this.removeClass('loader active');
      $this.text('Success');
      $this.addClass('success animated pulse');  

      setTimeout(() => {
        $this.text('Search');
        $this.removeClass('success animated pulse');
        $this.blur();
      }, 2900);
    });
  }); 
});