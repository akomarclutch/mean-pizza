 // app/routes.js
module.exports = function(app) {
  var Pizza = require('./models/pizza');

  // Frontend routes ===========================================

    app.get('/', function(req, res) {
      res.sendfile('./public/views/index.html');
    });

    app.get('/error', function(req, res) {
      res.sendfile('./public/views/index.html');
    });

  // API Routes ===========================================

    // Base API Route handling ===========================================

      //Create new pizza
      app.post('/api/pizza', function(req, res) {
        var pizza = new Pizza(); // create instance of pizza
        pizza.name = req.body.name; // name your pizza
        pizza.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Pizza created!' });
        });
      });

      // get all the pizzas
      app.get('/api/pizza', function(req, res) {
        Pizza.find(function(err, pizzas) {
          if (err)
            res.send(err);
          res.json(pizzas);
        });
      });

    // ObjectID Route handling ===========================================

      // get pizza with this id
      app.get('/api/pizza/:pizza_id', function(req, res) {
        Pizza.findById(req.params.pizza_id, function(err, pizza) {
          if (err)
            res.send(err);
          res.json(pizza);
        });
      })

      // update pizza with this id
      app.put('/api/pizza/:pizza_id', function(req, res) {
        Pizza.findById(req.params.pizza_id, function(err, pizza) {
          if (err)
            res.send(err);
          pizza.name = req.body.name;
          pizza.save(function(err) {
            if (err)
              res.send(err);
            res.json({ message: 'Pizza updated!' });
          });
        });
      })

      // delete the bear with this id
      app.delete('/api/pizza/:pizza_id', function(req, res) {
        Pizza.remove({
          _id: req.params.pizza_id
        }, function(err, pizza) {
          if (err)
            res.send(err);
          res.json({ message: 'Successfully deleted' });
        });
      });
};
