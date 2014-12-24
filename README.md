mean-pizza
==========

Pizza API built on Mongo Express Angular Node stack

available routes
================

/api/pizza (get - returns all pizzas - 200)

/api/pizza (post - create pizza - 200)

/api/pizza/:pizza_id (get - return pizza with specific id - 200)

/api/pizza/:pizza_id (put - update pizza with specific id - 200)

/api/pizza/:pizza_id (delete - delete pizza with specific id - 200)

================

\*post and put expect "name" as key in request body

\*\*pizza_id is converted to ObjectID()

================
