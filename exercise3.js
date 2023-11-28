function getMyBornDay(year, month, day) {
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Saturday", "Friday", "Saturday"];
    var date = new Date(year, month - 1, day); 
    var dayOfWeekNumber = date.getDay();

    return Days[dayOfWeekNumber];
}


var year = 2006;
var month = 11; 
var day = 26;
var dayOfWeek = getMyBornDay(year, month, day);
console.log("My Born Day: " + dayOfWeek);
