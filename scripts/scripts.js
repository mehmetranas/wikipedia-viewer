var showWelcomeText = function (text) {
    $(".welcomeText").find("p").text(text);
  $(".welcomeText").show().animateCss("fadeInLeftBig");
};

var showSearchBox = function () {
    $(".entry").show().animateCss("fadeInUp");
};

var hideWellcomeText = function(callback) {
    $(".welcomeText").animateEndWithFunc("fadeOut",callback);
};


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