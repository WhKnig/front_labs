10
CORS — это политика безопасности браузера и в node js она отсутствует, поэтому
ошибок в терминале нет. CORS требует специальный заголовок для браузера с
разрешением на работу. С axios мы получаем доступ к vk (как сайт обращается к
сайту).
1. PixiJS Animation
cd 1
npm install
npm run dev

2. Axios VK (Browser & Node)
- Browser: Открыть 2/index.html в браузере
- Node: cd 2 && node node-test.js
VK не разрешает запросы со сторонних доменов

3. Axios GeoIP (Browser & Node)
- Browser: Открыть 3/index.html в браузере
- Node: cd 3 && node node-test.js
В отличие от VK geoip…. содержит этот заголовок поэтому ошибки нет.

4-7. Postman Simulation
cd 4-5-6-7
npm install
node postman-sim.js
В заголовках есть параметры, которые управляют разрешенными http запросами,
cookies, разрешенные http/https и остальное.

8. Environment Variables
cd 8
npm install
 Запуск в разных режимах:
npm run dev:localhost
npm run dev:dev
npm run dev:prod
