var wikiService = function (searchTerm, callback) {
    $(".pending").show();
  var url =
      "https://" + lang + ".wikipedia.org" + "/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageimages%7Cinfo&piprop=original&inprop=url&indexpageids=1&generator=search&exsentences=3&exintro=1&explaintext=1&gsrlimit=10&gsrsearch=" + searchTerm;

    $.ajax({
       method:"POST",
        dataType: "json",
        url: url,
        success: function (data) {
          callback(data);
            $(".pending").hide();
        },
        error: function () {
            console.log("Error")
        }
    });
};
