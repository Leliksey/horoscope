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
        $(".review").hide();
    });
    $("#seeMore").click(function(e) {
        e.preventDefault();
        $(".categoryWall__items").toggleClass("open");
    });
    $(".pricing__tab").click(function() {
        $(".pricing__tab").removeClass("active");
        $(this).addClass("active");
    });
    $(".reviews__item-img_play, .reviews .link-more").click(function() {
        $("body").append(overlay);
        $(".review").show();
    });
    
    $('.reviews__items').owlCarousel({
        loop:true,
        nav:true,
        mouseDrag:true,
        touchDrag: true,
        pullDrag:false,
        freeDrag:false,
        URLhashListener:false,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            1400:{
                items:3
            }
        }
    });
});