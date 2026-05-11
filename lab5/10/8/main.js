// В Vite переменные доступны через import.meta.env
const title = import.meta.env.VITE_APP_TITLE;
const apiUrl = import.meta.env.VITE_API_URL;
const debug = import.meta.env.VITE_DEBUG_MODE;

console.log('Environment initialized:', title);

document.getElementById('env-name').textContent = title;
document.getElementById('api-url').textContent = apiUrl;
document.getElementById('debug-mode').textContent = debug;
