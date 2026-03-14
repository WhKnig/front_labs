(function initCounter() {
    let visits = localStorage.getItem('lab4_visit_count');
    if (visits === null) {
        visits = 0;
    }
    visits = parseInt(visits) + 1;
    localStorage.setItem('lab4_visit_count', visits);
    alert("Вы загрузили эту страницу " + visits + " раз(а).");
})();