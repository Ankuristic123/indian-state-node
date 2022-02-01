// const mongoose = require('mongoose')
// const indianCitiesDatabase = require('indian-cities-database');
// const citySchema = indianCitiesDatabase.citySchema;
// console.log(citySchema)
// citySchema.set('myCity', 'my_cities_collection');




// var myCity = mongoose.model('myCity', citySchema);


// module.exports = myCity


const indianCitiesDatabase = require('indian-cities-database');
var cities = indianCitiesDatabase.cities;
console.log(cities)