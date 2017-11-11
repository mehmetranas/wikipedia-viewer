var lang = "en";

$(document).ready(function(){
    showWelcomeText("Welcome to Wikipedia Viewer, please select language.");

    $(".js-btn-lang").on("click", function () {
        lang = $(this).attr("data-lang");
        hideWellcomeText(showSearchBox);
    });

    $(".js-search").click(searchFire);

    $(document).on("keypress",function () {
        if(event.which == 13 && $("input.search-box").is(":focus"))
            searchFire();
    });

    $("#toggle-lang").change(function () {
        lang = lang == "tr" ? "en" : "tr";
            searchFire();
    });

    $(".search-box").on("keyup",function () {
        getTitles()
    })
});
