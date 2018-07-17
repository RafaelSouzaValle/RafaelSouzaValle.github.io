// Soft scroll function

$(function() {
var $doc = $('html, body');
$('.softScroll').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
}); 