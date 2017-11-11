var wikiService = function (searchTerm, callback) {
  var url =
      "https://" + lang + ".wikipedia.org" + "/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageimages&piprop=original&indexpageids=1&generator=search&exsentences=3&exintro=1&explaintext=1&gsrlimit=10&gsrsearch=" + searchTerm;

    $.ajax({
       method:"POST",
        dataType: "json",
        url: url,
        success: function (data) {
           console.log(data)
          callback(data)
        },
        error: function () {
            console.log("Error")
        }
    });
};
