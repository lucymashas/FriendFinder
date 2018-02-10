
// ===============================================================================
// LOAD DATA
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    res.json(true);
  })


  // app.post("/api/clear", function() {
  //     // Empty out the arrays of data
  //     friendsData = [];
  //     console.log(friendsData);
  // });

};
