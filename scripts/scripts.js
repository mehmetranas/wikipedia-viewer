$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    },
    animateEndWithFunc: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName).hide();
            if(callback) callback();
        });
        return this;
    }
});

var showWelcomeText = function (text) {
    $(".welcomeText").find("p").text(text);
  $(".welcomeText").show().animateCss("fadeInLeftBig");
};

var showSearchBox = function () {
    $(".entry").show().animateCss("fadeInUp");
    $("input.search-box").focus();
    showToggle();
};

var hideWellcomeText = function(callback) {
    $(".welcomeText").animateEndWithFunc("fadeOut",callback);
};

var search = function (term) {
    var listResult = function (data){
        var content = $("#content-template").html();
        var result =_.template(content)({data:data});
        $("#content").html(result);
    };
    $(".pending").show();
    wikiService(term,listResult).extractSearch();
};

var searchFire = function () {
    var term = $("input.search-box").val();
    if(!term || term.trim().length == 0) {
        bootbox.alert({
            size:"small",
            message:"Please enter a term."
        });
        return;
    }

    $(".entry").css("margin","10% auto");
    search(term);
};

var showToggle = function () {
    var checked = lang == "en" ? true : false;
    $("#toggle-lang").attr("checked",checked);
    $("#toggle-lang").bootstrapToggle({
      on:"EN",
      off:"TR"
  });
};

var getTitles = function () {
    var term = $("input.search-box").val();
    if(term.trim(" ").length<2) return;
    var func = function (data) {
        var titles = $.map(data.query.pages, function (value, index) {
            return value.title;
        });
        var content = $("#pop-template").html();
        var result = _.template(content)({titles:titles});
        $("#js-pop").html(result);
        $(".complater").show();
    };
    wikiService(term,func).titleSearch();
};
