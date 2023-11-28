function getSecondsToNewYear() {}

 var datetime_in = new Date();

 var currentDatetime = new Date();

 var currentYear = datetime_in.getFullYear()

 var NewYear = currentYear +1

 var StartOfYear = new Date(NewYear, 0,1,0,0)

var totalseconds = (StartOfYear - datetime_in) / 1000; 
alert(totalseconds);

console.log(totalseconds);

getSecondsToNewYear();
