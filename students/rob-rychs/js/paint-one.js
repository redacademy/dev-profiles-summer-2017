$(document).ready(function(){$("#matrixbtn").one( "click", function() { paint(); } );})
$(window).resize(function () { function doSomething() {
    newctx();
};

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doSomething, 100);
}); });