
$.getJSON("../json/wine-data.json", function(data){
 var items = [];
 $.each( data, function( key, val ) {
    if (items.length <=5){
     if ((val.variety != null) && (val.variety == v)){ 
        if ((val.country != null) && (val.country== c)){ 
            if ((val.winery != null) && (val.winery == w)){ 
                console.log(val.country,val.variety,val.winery)
                items.push( "<li id='" + key + "'>" + "Desctiption: "+ val.province + "<br>" + " name: "+val.price+ "</li>" ); 
            } }}}
    else{
        return false;
    }  
    
});
    if (items.length == 0){
        console.log(" Nooooooooo ");
    }
    $( "<ul/>", {
    "class": "Output",
    html: items.join( "" )
    }).appendTo( "body" );
    
});

  