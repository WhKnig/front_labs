import { Application, Graphics } from 'pixi.js';

(async () => {
  // 1. Создаем приложение
  const app = new Application();

  // Инициализируем PixiJS
  await app.init({
    background: '#1099bb',
    resizeTo: window
  });

  // Добавляем холст в специально отведенный контейнер
  const container = document.getElementById("pixi-container");
  if (container) {
    container.appendChild(app.canvas);
  } else {
    document.body.appendChild(app.canvas);
  }

  // 2. Рисуем прямоугольник (используем современный синтаксис v8)
  const rectangle = new Graphics()
    .rect(0, 0, 150, 100)
    .fill(0xde3249);

  // Устанавливаем точку начала координат в центр самого прямоугольника
  rectangle.pivot.set(75, 50);

  // Размещаем прямоугольник в центре экрана
  rectangle.x = app.screen.width / 2;
  rectangle.y = app.screen.height / 2;

  app.stage.addChild(rectangle);

  // 3. Добавляем цикл анимации
  app.ticker.add((time) => {
    // Каждое обновление увеличиваем угол поворота
    rectangle.rotation += 0.03 * time.deltaTime;
  });
})();

