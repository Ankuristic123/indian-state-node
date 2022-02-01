// const indianCitiesDatabase = require('indian-cities-database');
// var cities = indianCitiesDatabase.cities;
// console.log(cities)

const app = require('./app')
const port = process.env.PORT||5000

app.listen(port, () => {
    console.log('Server is up on port ' )
})