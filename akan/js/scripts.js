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

function getAkanName(day,gender){
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