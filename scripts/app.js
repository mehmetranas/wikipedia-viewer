var lang = "en";

$(document).ready(function(){
    showWelcomeText("Welcome to Wikipedia Viewer, please select language.");

    $(".js-btn-lang").on("click", function () {
        lang = $(this).attr("data-lang");
        hideWellcomeText(showSearchBox);
    });


    $(".js-search").click(searchFire);
    $(".search-box").focus(function () {
        $(document).on("keypress",function () {
            if(event.which == 13)
            searchFire();
        })
    })
});
