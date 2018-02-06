
var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests

  app.get("/api/data/friends.js", function(req, res) {
    res.json(tableData);
  });
