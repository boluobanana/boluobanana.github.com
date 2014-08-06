
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , util = require('util');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views'); 
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/hello', routes.hello);
app.get('/list', function  (req, res) {
  res.render('list', {
    title: 'List',
    items: [1991, 'byvoid', 'express', 'Node.js']
  });
});

app.helpers({
  inspect: function(obj){
    return util.inspect(obj, true);
  }
});
app.dynamicHelpers({
  headers: function  (req, res) {
    return req.headers;
  }
});
app.get('/helper', function  (req, res) {
  res.render('helper', {
    title: 'Helpers'
  });
});

var users = {
  'byvoid': {
    name: 'Carbo',
    website: 'http://www.byvoid.com'
  }
};
app.all('/user/:username', function  (req, res, next) {
  if (users[req.params.username]) {
    next();
  } else{
    next(new Error(req.params.username + ' does not exist .'));
  };
});

app.get('/user/:username', function  (req, res) {
  res.send(JSON.stringify(users[req.params.username]));
});
app.put('/user/:username', function  (req, res) {
  res.send('Done');
})
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
