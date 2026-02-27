const btn_check = document.getElementById("btn_check");

btn_check.addEventListener("click", () => {
    const num_month = prompt("Введите номер месяца (1-12):");
    if (num_month === null) return;

    const name_month = get_name_month(num_month.trim());
    alert(name_month);
});

function get_name_month(num_month) {
    switch (num_month) {
        case "1": return "January";
        case "2": return "February";
        case "3": return "March";
        case "4": return "April";
        case "5": return "May";
        case "6": return "June";
        case "7": return "July";
        case "8": return "August";
        case "9": return "September";
        case "10": return "October";
        case "11": return "November";
        case "12": return "December";
        default: return "Invalid month number";
    }
}