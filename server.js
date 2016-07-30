var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/suggestions', function(req, res) {
    if (req.query.q && req.query.company) {
      var response = 'Hi there, how can I help?';

      // Return the same basic response
      res.json(response);
    }
});

app.use('/', router);
app.listen(port);
console.log('Listening on port: ' + port);
