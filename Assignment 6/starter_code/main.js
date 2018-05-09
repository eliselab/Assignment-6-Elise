console.log('connected')

var cities = ['NYC', 'LA', 'SF', 'ATX', 'SYD'];
 cities.forEach(function(item){
   $('#city-type').append($('<option value='+item+'> '+item+' </option>'))
  })

$('#city-type').change(function(event) {
   $('body').removeClass(); 
   var cityType = $('#city-type').val()
   cities.forEach(function(item){
    if (cityType === item){
       $('body').addClass(item.toLowerCase())
    }
   })
})

