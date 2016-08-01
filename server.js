var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/suggestions', function(req, res) {
    if (req.query.q && req.query.company) {
      var responses = [
        'Hi there, how can I help?',
        'Have you tried turning it off and on again?',
        'What seems to be the issue?'
      ]

      // Return the same basic response
      res.json(responses);
    }
});

app.use('/', router);
app.listen(port);
console.log('Listening on port: ' + port);
