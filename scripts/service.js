var wikiService = function (searchTerm, callback) {
    var success = function (data) {
        callback(data);
        $(".pending").hide();
    };

    var ajax = function (url) {
        $.ajax({
            method:"GET",
            dataType: "json",
            url: url,
            success: success,
            error: error
        });
    };

    var error = function () {
        console.log("Error")
    };

    var extracts = function () {
        var url =
            "https://" + lang + ".wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageimages%7Cinfo&piprop=original&inprop=url&indexpageids=1&generator=search&exsentences=3&exintro=1&explaintext=1&gsrlimit=10&gsrsearch=" + searchTerm;
        ajax(url);
    };

    var titles = function () {
        var url =
            "https://" + lang + ".wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=10&gsrsearch=" + searchTerm;
       ajax(url);
    };

    return {
        extractSearch: extracts,
        titleSearch: titles
    }
};
