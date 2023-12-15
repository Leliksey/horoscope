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
        $(".guideModal").hide();
    });
    $("#seeMore").click(function(e) {
        e.preventDefault();
        $(".categoryWall__items").toggleClass("open");
    });
    $(".pricing__tab").click(function() {
        $(".pricing__tab").removeClass("active");
        $(this).addClass("active");
    });
    $(".pricing__item-btn").click(function() {
        $("body").append(overlay);
        $(".overlay").show();
        $(".guideModal").show();
    });
    $(document).on("click", ".reviews .link-more", function() {
        $("body").append(overlay);
        $(".review").show();
        let name = $(this).parents(".reviews__item").find(".reviews__item-title").text();
        let text = $(this).parents(".reviews__item").find(".reviews__item-desc").text();
        $(".review__name").text(name);
        $(".review__text").text(text);
    });
    $(document).on("click", ".reviews__item-img_play", function() {
        $("body").append(overlay);
        $(".review").show();
        let name = $(this).parents(".reviews__item").find(".reviews__item-title").text();
        let text = $(this).parents(".reviews__item").find(".reviews__item-desc").text();
        $(".review__name").text(name);
        $(".review__text").text(text);
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
                items:1,
                stagePadding: 170,
            },
            576:{
                items:2,
                stagePadding: 30
            },
            1400:{
                items:3
            }
        }
    });
    $('.sertificates__slider').owlCarousel({
        loop:true,
        center: true,
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
                items:1,
                margin: 32,
                center: false,
                stagePadding: 120,
            },
            576:{
                items:2,
                margin: 32,
                stagePadding: false,
            },
            768: {
                margin: 40,
            },
            1400:{
                items:3,
                margin: 40,
            },
            1570:{
                margin: 64,
            }
        }
    });
    $(".questions__item").click(function() {
        $(this).find(".questions__item-text").slideToggle();
        $(this).find(".questions__item-arrow").toggleClass("open");
    });
    $("#seeMore2").click(function(e) {
        e.preventDefault();
        $(".questions__list").toggleClass("open");
    });
    $("#steps__next").click(function(e) {
        e.preventDefault();
        $(".steps__range-item.current").next().addClass("current");
        $(".steps__range-item.current").prev().removeClass("current");
        $(".steps__range-item.active").next().addClass("active");
        $("#steps__back").addClass("d__flex");
        $(".steps__navigation").css("justify-content", "space-between");
        let index = $(".steps__range-item.current").index();
        $(".step").addClass("hide");
        $(".step").eq(index).removeClass("hide");
        let count = $(".steps__range-item.active");
        if(count.length > 3) {
            $("#steps__next").hide();
        }
    });
    $("#steps__back").click(function(e) {
        e.preventDefault();
        $(".steps__range-item.current").prev().addClass("current");
        $(".steps__range-item.current").next().removeClass("current");
        let index = $(".steps__range-item.current").index();
        $(".step").addClass("hide");
        $(".step").eq(index).removeClass("hide");
        let count = $(".steps__range-item.active");
        if(count.length < 2) {
            return
        } else {
            $(".steps__range-item.active").eq(-1).removeClass("active");
        }
        if(count.length < 3) {
            $("#steps__back").removeClass("d__flex");
            $(".steps__navigation").css("justify-content", "flex-end");
        }
        if(count.length == 4) {
            $("#steps__next").show();
        }
    });
    $("#phone").mask("+38 (000) 00-00-000");
});