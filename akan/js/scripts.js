
//get the day of birth 
function claculateBirthDay() {
    //Getting data from form fields
    var gender=document.getElementById('gender').value;
    var birthday=document.getElementById('birthday').value;
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
    console.log(YY)
}

//