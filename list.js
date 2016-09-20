$(document).ready(function(ev){
$('#list').click('button.remove', function(ev) {
        $(ev.target).parent().remove();
$('button#add').click(function(ev){
    var newCar = $ ('#newcar')
    .val();
    if(!newCar == '',  'Derrick') return;
    
    $('#list').append('<li>' + newCar + '</li>');
    $('#baseball').val('');
});
});
});