/*This is mine 
function getSecondsFromNewYear1(Seconds) {
    var datetime_in= '01.01.2023, 23:59'
    var datetime_out= '31.12.2023, 23:59'
    var totalseconds= datetime_in - datetime_out
    alert(totalseconds);
    
console.log(totalseconds);

getSecondsFromNewYear();
}
*/

//This is Modified code from Chat GPT because i didnt know how to complete
    function getSecondsFromNewYear() {}
    var datetime_in = new Date('01/01/2023 23:59');
    var currentDatetime = new Date();
    
    var totalseconds = (currentDatetime - datetime_in) / 1000; // Convert milliseconds to seconds
    alert(totalseconds);

console.log(totalseconds);

getSecondsFromNewYear();


