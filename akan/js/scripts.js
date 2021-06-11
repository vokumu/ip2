$('#form').submit(function (e) {
    e.preventDefault();
});
function getDayofWeek(birthday){
    //splitting the date to get the date,month,year in an array
    var birthDateSplit = birthday.split("-"); 
    //getting day    
    var DD=parseInt(birthDateSplit.pop());
    //getting month
    var MM=parseInt(birthDateSplit.pop());
    //getting full year
    var YY=birthDateSplit.pop();
    //getting century from year
    var CC=parseInt(YY.slice(0,2))
    //getting the last year digit
    YY=parseInt(YY.slice(2,4))
    var day_of_the_week=((((CC/4)-2*CC-1)+((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7)
    day_of_the_week=day_of_the_week.toFixed(0)
    return day_of_the_week
}