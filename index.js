$(document).ready(function() {
    $(".clickable1").click(function() {
        $(".designshow").toggle();
        $(".designnotshow").toggle();
    });
    $(".clickable2").click(function() {
        $(".devshow").toggle();
        $(".devnotshow").toggle();
    });
    $(".clickable3").click(function() {
        $(".productshow").toggle();
        $(".productnotshow").toggle();
    });
    $(".port-image").hover(function(){
        $(".imagetext" , this).slideToggle("slow");
    });

});
// ALERT TO THE USER YOU GOT THEIR MESSAGE
function getInput() {
    event.preventDefault();
    var namesGiven = document.getElementById("name").value;

    alert(namesGiven + " we have received your message. Thank you for reaching out to us.");
}

