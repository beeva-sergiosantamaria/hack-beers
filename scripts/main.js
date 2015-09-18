
$.get( "data/drink.json", function( data ) {
  console.log(data);
  _.each(data.fact, function(value){
  	$( ".container" ).append( "<p>"+value.Value+"</p>" );
  })

});