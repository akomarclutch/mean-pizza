mean-pizza
==========

Pizza API built on Mongo Express Angular Node stack

available routes
================

/api/pizza (get [200 - returns all pizzas])

/api/pizza (post [200 - create pizza])

/api/pizza/:pizza_id (get [200 - return pizza with specific id])

/api/pizza/:pizza_id (put [200 - update pizza with specific id])

/api/pizza/:pizza_id (delete [200 - delete pizza with specific id])


######\*post and put expect "name" as key in request body

######\*\*pizza_id is converted to ObjectID()
