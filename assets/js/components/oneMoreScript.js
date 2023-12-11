$(document).ready(function() {
    var overlay = "<div class='overlay'></div>"
    $(".burger").click(function() {
        $("body").append(overlay);
        $(".burgerMenu").addClass("open");
    })
    $(".burgerMenu__close").click(function() {
        $(".overlay").remove();
        $(".burgerMenu").removeClass("open");
    });
    $(document).on("click", ".overlay", function() {
        $(".overlay").remove();
        $(".burgerMenu__close").click();
    });
    $("#seeMore").click(function(e) {
        e.preventDefault();
        $(".categoryWall__items").toggleClass("open");
    });
    $(".pricing__tab").click(function() {
        $(".pricing__tab").removeClass("active");
        $(this).addClass("active");
    })
});