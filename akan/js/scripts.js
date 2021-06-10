
//get the day of birth 
function claculateBirthDay() {
    //Getting data from form fields
    var gender=document.getElementById('gender').value;
    var birthday=document.getElementById('birthday').value;
    //splitting the date to get the date,month,year in an array
    var birthDateSplit = birthday.split("-");    
    var DD=parseInt(birthDateSplit.pop());
    console.log(DD)
}

//