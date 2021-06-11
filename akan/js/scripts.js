function getDayofWeek(date,month,year){   
    var DD=parseInt(date);
    var MM=parseInt(month);
    var CC=parseInt(year.slice(0,2))
    YY=parseInt(year.slice(2,4))
    var day_of_the_week=((((CC/4)-2*CC-1)+((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7)
    day_of_the_week=day_of_the_week.toFixed(0)
    return day_of_the_week
}
function getAkanName(day,gender){
    var akanName;
    maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    if(gender=="male"){
        if(day==0){
            akanName=maleNames[0]
        }
        else if(day==1){
            akanName=maleNames[1]
        }
        else if(day==2){
            akanName=maleNames[2]
        }
        else if(day==3){
            akanName=maleNames[3]
        }
        else if(day==4){
            akanName=maleNames[4]
        }
        else if(day==5){
            akanName=maleNames[5]
        }
        else if(day==6){
            akanName=maleNames[6]
        }
    }
    else if(gender==='female' ){
        if(day==0){
            akanName=femaleNames[0]
        }
        else if(day==1){
            akanName=femaleNames[1]
        }
        else if(day==2){
            akanName=femaleNames[2]
        }
        else if(day==3){
            akanName=femaleNames[3]
        }
        else if(day==4){
            akanName=femaleNames[4]
        }
        else if(day==5){
            akanName=femaleNames[5]
        }
        else if(day==6){
            akanName=femaleNames[6]
        }
    }
    else{

    }
    return akanName;
}
function validateDate(date) {
    if(date == ""){
        document.getElementById("invalid_date").innerHTML = "Date cannot be empty";
    }
    else if(isNaN(date)){
        document.getElementById("invalid_date").innerHTML = "Date has to be a number";
    }
    else if (date <=0 || date > 31) {
        document.getElementById("invalid_date").innerHTML = "Input not a valid Date";
    } 
    else {
        return date
    }
}
function validateMonth(month) {
    if(month == ""){
        document.getElementById("invalid_month").innerHTML = "Month cannot be empty";
    }
    else if(isNaN(month)){
        document.getElementById("invalid_month").innerHTML = "Month has to be a number";
    }
    else if (month <=0 || month > 12) {
        document.getElementById("invalid_month").innerHTML = "Input not a valid Month";

    } else {
        return month
    }
}
function validateYear(year) {
    if(year == ""){
        document.getElementById("invalid_year").innerHTML = "Year cannot be empty";
    }
    else if(isNaN(year)){
        document.getElementById("invalid_month").innerHTML = "Year has to be a number";
    }
    else if (year.length != 4) {
        document.getElementById("invalid_year").innerHTML = "Input not a valid Year";
    }
    else {
        return year;
    }
}
function validateGender(gender){
    if(gender == ""){
        document.getElementById("invalidGender").innerHTML = "Gender cannot be empty";
    }
    else{
        return gender;
    }
}
function claculateBirthDay() {
    event.preventDefault();
    //getting data from form
    var gender=document.getElementById('gender').value;
    var date = document.getElementById("dateOfBirth").value;
    var month = document.getElementById("monthOfBirth").value;
    var year = document.getElementById("yearOfBirth").value;
    console.log(year)
    //validation
    year=validateYear(year);
    date=validateDate(date);
    month=validateMonth(month);
    gender=validateGender(gender);
    var day=getDayofWeek(date,month,year);
    var name=getAkanName(day,gender);
    if (name !=null){
        alert("Your akan name is "+name);
        window.location.reload();
    }
}