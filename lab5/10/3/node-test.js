import axios from 'axios';

console.log('--- NODE.JS TEST (GeoIP) ---');
console.log('Requesting https://json.geoiplookup.io/ ...');

axios.get('https://json.geoiplookup.io/')
    .then(response => {
        console.log('Success!');
        console.log('IP Data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
