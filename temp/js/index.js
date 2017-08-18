/// <reference path="jquery.min.js" />
/// <reference path="global.js" />

$(function () {


    /*
     Banner轮播
     */
    var $bannerFrame = $(".bannerFrame");
    var bannerTimer = null;
    var currentBanner = 1;
    function bannerChange() {
        currentBanner++;
        if (currentBanner > 3) currentBanner = 1;
        $bannerFrame.find(".arc").removeClass("arcActive");
        $bannerFrame.find(".arc" + currentBanner).addClass("arcActive");
        $bannerFrame.find(".banner").stop(true, true).fadeOut(1000);
        $bannerFrame.find(".banner" + currentBanner).stop(true, true).fadeIn(1000);
    }
    $bannerFrame.find(".arc").on("click", function () {
        if (!!bannerTimer) {
            clearInterval(bannerTimer);
            bannerTimer = null;
        }
        $bannerFrame.find(".arc").removeClass("arcActive");
        $(this).addClass("arcActive");
        $bannerFrame.find(".banner").stop(true, true).fadeOut(1000);
        $bannerFrame.find(".banner" + $(this).attr("data-banner")).stop(true, true).fadeIn(1000);
        currentBanner = parseInt($(this).attr("data-banner"));
        bannerTimer = setInterval(function () {
            bannerChange();
        }, 5000);
    });
    bannerTimer = setInterval(function () {
        bannerChange();
    }, 5000);

    var currentSection1 = true;
    $(".section1 .leftArrow,.section1 .rightArrow").on("click", function () {
        if (currentSection1) {
            $(".section1 .frame .items").animate({ marginLeft: "-1095px" }, 500);
        } else {
            $(".section1 .frame .items").animate({ marginLeft: "0px" }, 500);
        }
        currentSection1 = !currentSection1;
    });

});
