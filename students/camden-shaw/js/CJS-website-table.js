/*This is the Javascript to make my first website look fancy*/
// creating a variable to track clicks
var clickCount = 0;

// beginning main function
function main() {
    //hiding table then fading it in on load
    $('.table').hide();
    $('.table').fadeIn(1000);
    $('.face').show();
    // creating consequence for clicking on 'x' above picture
    $(this).on('click', function () {
        //add 1 to clickCount
        clickCount = clickCount + 1;
        //toggle picture off
        $('#upperLeft').slideToggle(500);
        $('.face').slideToggle(500);
        //turn 'x' into 'o'
        if (clickCount == 1) {
            $('.closeButton').text('o');
        }
        
    //  Some Code to make the 'o' return to an 'x' that didn't work.
        else {
            clickCount =  0;
            $('.closButton').text('x');
        }
    });
    
}



$(document).ready(main);
