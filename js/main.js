$('#myModal').modal({keyboard:false, backdrop: 'static'});

$(function() {
  var startValue = randomValue();
  var targetValue;

  var mySlider = $("input.slider").slider( { value: startValue, min: 0, max: 100, step: 5 } );

  mySlider.on('slideStart', function(ev){
    do {
      targetValue = randomValue();
    } while (targetValue >= ev.value - 15 && targetValue <= ev.value + 15);
    $('#instruction').text('Move slider to ' + targetValue + '.');
  });

  mySlider.on('slideStop', function(ev){
    if(ev.value === targetValue){
      $('#myModal').modal('hide');
    } else {
      
      $('#instruction').text('Wrong! Try again.');
    }
  });
});

function randomValue() {
  return Math.round(Math.random() * 20) * 5;
}