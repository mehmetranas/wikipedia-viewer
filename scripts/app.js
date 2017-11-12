var lang = "en";

$(document).ready(function(){
    showWelcomeText("Welcome to Wikipedia Viewer, please select language.");

    $(".js-btn-lang").on("click", function () {
        lang = $(this).attr("data-lang");
        hideWellcomeText(showSearchBox);
    });

    $(".js-search").click(searchFire);

    $(document).on("keypress",function () {
        if(event.which == 13 && $("input.search-box").is(":focus")) {
            searchFire();
        }
    });

    $("#toggle-lang").change(function () {
        lang = lang == "tr" ? "en" : "tr";
            searchFire();
    });

    $(".search-box").on("keyup",function (e) {
        if(e.keyCode === 38 || e.keyCode === 40) return;
        getTitles()
    });

    $(".entry").on("click",".complated-sentence",function () {
        var term = $(this).text();
        $(".search-box").val(term);
        searchFire();
    });

 });
