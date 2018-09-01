// export our routes to be used in server.js
module.exports = function (app, request, cheerio, db) {
  app.get("/scrape", function (req, res) {
    request("https://www.newsobserver.com/", function (error, response, html) {

      var $ = cheerio.load(html);

      $("article").each(function (i, element) {
        // Save an empty result object
        var result = {};

        // Add items to the result object
        result.title = $(element).find("a").text();
        result.link = $(element).find("a").attr("href");
        // Create a new Article using the `result` object built from scraping
        db.Article.create(result)
          .then(function (dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            console.log(err);
          });
      });
       // If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
    });
  });
}