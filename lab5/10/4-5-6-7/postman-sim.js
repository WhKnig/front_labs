import axios from 'axios';
import qs from 'qs';

const separator = () => console.log('\n' + '='.repeat(50) + '\n');

async function runDemo() {
    // 1. GET VK.COM
    separator();
    console.log('1. GET https://vk.com (Анализ заголовков)');
    const vk = await axios.get('https://vk.com');
    console.log('заголовки (CORS):');
    console.log('Access-Control-Allow-Origin:', vk.headers['access-control-allow-origin'] || 'ОТСУТСТВУЕТ (Поэтому браузер блокирует)');
    console.log('Server:', vk.headers['server']);

    // 2. GET GeoIP
    separator();
    console.log('2. GET https://json.geoiplookup.io/ (Анализ заголовков)');
    const geo = await axios.get('https://json.geoiplookup.io/');
    console.log('заголовки (CORS):');
    console.log('Access-Control-Allow-Origin:', geo.headers['access-control-allow-origin'] || 'ОТСУТСТВУЕТ');
    console.log('Content-Type:', geo.headers['content-type']);

    // 3. POST Add User (x-www-form-urlencoded)
    separator();
    console.log('3. POST Add User (x-www-form-urlencoded) -> https://dummyjson.com/users/add');
    const userData = qs.stringify({
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 25
    });
    try {
        const res = await axios.post('https://dummyjson.com/users/add', userData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        console.log('Результат добавления пользователя:', res.data);
    } catch (e) {
        console.log('Ошибка добавления:', e.response?.data || e.message);
    }

    // 4. POST Login (JSON)
    separator();
    console.log('4. POST Login (JSON) -> https://dummyjson.com/auth/login');
    const loginData = {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
    };
    try {
        const logRes = await axios.post('https://dummyjson.com/auth/login', loginData); 
        console.log('Результат логина (Данные + Токен):');
        console.log('ID:', logRes.data.id);
        console.log('Token:', logRes.data.accessToken.substring(0, 30) + '...');
    } catch (e) {
        console.log('Ошибка логина:', e.response?.data || e.message);
    }
}

runDemo();
