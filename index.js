var app = require('express')();

app.get('*', function(req, res) {
  res.end('app1');
});

app.listen(process.env.PORT);
