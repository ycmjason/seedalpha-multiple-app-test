var app = require('express')();

app.get('*', function(req, res) {
  res.end('app2');
});

app.listen(process.env.PORT);
