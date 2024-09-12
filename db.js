const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vertualized:8GguB6nlsKX4dsSM@mern-cluster.nfjya.mongodb.net/property-tech')
  .then(() => console.log('Connected!'));