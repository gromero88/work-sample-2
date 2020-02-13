$(".save1").click(function() {
    let name = $(".nombre").val();
    console.log(name);
});

$(".save2").click(function() {
    let pics = parseInt($(".selfie").val());
    console.log(pics);
});
$(".save3").click(function() {
    let deleted = parseInt($(".deleted").val());
    console.log(deleted);
});
$(".save4").click(function() {
    let year = parseInt($(".ano").val());
    console.log(year);
});

$(".done").click(function() {
    let name = $(".nombre").val();
    let pics = parseInt($(".selfie").val());
    let deleted = parseInt($(".deleted").val());
    let total = 20 * (pics * 12) + (deleted * 52);
    console.log(total);
    let year = parseInt($(".ano").val());
    let future = year + 20;
    $(".middle").append(`<h2 class="here"> ${name}, you will have taken ${total} selfies by the year ${future}!</h2>`);
    $("img").show();
    $(".ego").show();
});