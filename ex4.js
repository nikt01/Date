function getlastDayOfMonth(year, month) {
    var date = new Date(year , month +1, 0);
    return date.getDate();
}
alert (getlastDayOfMonth(2023, 0));
console.log(getlastDayOfMonth(2023, 0));