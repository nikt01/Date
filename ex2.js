function getWeeklyDay(year, month, day) {
    var SpanishDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var date = new Date(year, month - 1, day); // Note: Months are 0-based in JavaScript Date objects
    var dayOfWeekNumber = date.getDay();

    return SpanishDays[dayOfWeekNumber];
}


var year = 2023;
var month = 11; 
var day = 27;
var dayOfWeek = getWeeklyDay(year, month, day);
console.log("Day of the week : " + dayOfWeek);
