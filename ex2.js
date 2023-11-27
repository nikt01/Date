function getWeeklyDay(year, month, day) {
    return ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado","Domingo"][
      new Date(year, month -1, day).getDay()
    ] || "Wrong Day Or Undefined";
  }
  
  var year = 2023;
  var month = 11; 
  var day = 27;
  var dayOfWeek = getWeeklyDay(year, month, day);
  console.log("Day of the week: "+getWeeklyDay);
  