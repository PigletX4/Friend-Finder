//load data

var friendsData = require("../app/data/friends");


//routing
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
      

      if (friendsData.length < 1) {
        friendsData.push(req.body);
        res.json(friendsData);
      }
      else {
        friendsData.push(req.body);
        res.json(friendsData);
      }
    
    });
  
  };
  