//Function to select element

$(document).ready(function() {
    $('.open').on('click', () => {
        $('.nav-list').addClass('active')
    });
    $('.close').on('click', () => {
        $('.nav-list').removeClass('active')
    })
});