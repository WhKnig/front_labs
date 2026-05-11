import axios from 'axios';

console.log('--- NODE.JS TEST ---');
console.log('Requesting https://vk.com...');

axios.get('https://vk.com')
    .then(response => {
        console.log('Success!');
        console.log('Status Status:', response.status);
        console.log('Response preview (first 100 chars):', response.data.toString().substring(0, 100));
    })
    .catch(error => {
        console.error('Error occurred:');
        if (error.response) {
            console.error('Server responded with status:', error.response.status);
        } else if (error.request) {
            console.error('No response received');
        } else {
            console.error('Message:', error.message);
        }
    });
