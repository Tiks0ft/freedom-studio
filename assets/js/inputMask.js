$("#phone").mask("+7(999) 999-9999");

$('.c_value').click(() => {
    $('.select__country').toggleClass('hidden')
})
$(document).click( function(e){
    if (!$(e.target).closest('.countries').length ) {
        $('.select__country').addClass('hidden')
        return;
    }
});

$('.country').click(function () {
    const imgCountry = $(this).children()[0].getAttribute('src')
    const idInput = $(this).attr('for');
    const val = $(`#${idInput}`).val();

    $('.c_value').attr('src', imgCountry)
    $('.select__country').toggleClass('hidden')
    $('#phone').val('')
    $("#phone").mask(val);

})