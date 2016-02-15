/*function slideSwitch() {
 var $active = $('#slideshow IMG.active');

 if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

 var $next =  $active.next().length ? $active.next()
 : $('#slideshow IMG:first');

 /*   $active.addClass('last-active');

 $next.css({opacity: 0.0})
 .addClass('active')
 .animate({opacity: 1.0}, 1000, function() {
 $active.removeClass('active last-active');
 });
 }

 $(function() {
 setInterval( "slideSwitch()", 5000 );
 })*/
$(document).ready(function()
{
    // Initializes the carousel
    $(".start-slide").click(
        function () {
            $("#myCarousel").carousel('cycle');
        }
    );
    // Stops the carousel
    $(".pause-slide").click(
        function () {
            $("#myCarousel").carousel('pause');
        }
    );
    // Cycles to the previous item
    $(".prev-slide").click(
        function () {
            $("#myCarousel").carousel('prev');
        }
    );
    // Cycles to the next itemtems -->
    $(".next-slide").click(
        function () {
            $("#myCarousel").carousel('next');
        }
    );
    // Cycles the carousel to a particular frame
    $(".slide-one").click(
        function () {
            $("#myCarousel").carousel(0);
        }
    );
    $(".slide-two").click(
        function () {
            $("#myCarousel").carousel(1);
        }
    );
    $(".slide-three").click(
        function () {
            $("#myCarousel").carousel(2);
        }
    );
    $(".slide-four").click(
        function () {
            $("#myCarousel").carousel(3);
        }
    );
    $(".slide-five").click(
        function () {
            $("#myCarousel").carousel(4);
        }
    );
    $('#myCarousel').carousel
    (
        {
            interval: 2000,
        }
    );
});