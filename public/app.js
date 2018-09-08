$("#scrapeButton").on("click", function() {
  $("#articles").empty();
  $.getJSON("/scrape", function(data) {
    console.log(data);
  })
})

