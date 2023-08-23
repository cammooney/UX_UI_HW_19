console.log("Your index.js file is loaded correctly!");

$("#button").click(function(){
    $(this).effect("shake", {times:4}, 1000);
});

$(document).ready(function(){
    $("footer").on({
        mouseenter: function(){
            $(this).css("background-color", "red");
        },
        mouseleave: function(){
            $(this).css("background-color", "yellow");
        }
    });
});