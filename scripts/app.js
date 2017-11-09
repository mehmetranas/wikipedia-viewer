
$(document).ready(function(){
    showWelcomeText("Welcome to Wikipedia Viewer, please enter the search term and hit enter.");

    $(document).on("click keypress", function () {
        hideWellcomeText(showSearchBox);
    });

    setTimeout(function () {
        if($(".welcomeText").css("display") == "none") return;
        hideWellcomeText(showSearchBox);
    },4500);
});
