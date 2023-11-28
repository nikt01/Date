
    function getSecondsFromNewYear() {}
    var datetime_in = new Date();
    var currentDatetime = new Date();
    var currentYear = datetime_in.getFullYear()
    var StartOfYear = new Date(currentYear, 0,1,0,0)

    var totalseconds = (datetime_in - StartOfYear) / 1000; 
    alert(totalseconds);

console.log(totalseconds);

getSecondsFromNewYear();


