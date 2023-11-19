
const axios = require('axios');


class SearchH{
    history = ['Tegucigalpa', 'Madrid', 'Ottawa'];

    constructor(){
        //TODO: read database if exists;
    }

    async searchCity(place){
        console.log('Ciudad: ', place)
        //TODO: http request
    }
}


module.exports = SearchH