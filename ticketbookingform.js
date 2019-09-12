$(function(){

    $('#ticketbook').on('submit', checkData);

});

function checkData(event) {
    $('#error').css("color","red");
    var newDiv = $('<div>');
    const letters = /^[A-Za-z]+$/;
    const number =/^[0-9]+$/;
    if($('#name').val()=='' || $('#name').val().length < 1 ){
        event.preventDefault();
    }
    if( !$('#name').val().match(new RegExp(letters))){
        $('#error').append("<br/>"+ "Name must be letters only!!");
    }

    if($('#zip').val().length != 5){
        event.preventDefault();
    }
    if($('#seat').val()<0 || $('#seat').val()>200 || !$('#seat').val().match(new RegExp(number))){
        $('#error').append("<br/>"+"Seat cannot be less than 0 or more than 200!!");
        event.preventDefault();
    }
    if($('[name="taxi"]:checked').length<1){
        $('#error').append("<br/>"+"You must select taxi type!!");
        event.preventDefault();

    }
    if($('[name="extras"]:checked').length<1){
        $('#error').append("<br/>"+"You must check one extra!!");
        event.preventDefault();

    }

}