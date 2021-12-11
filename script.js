console.log('HI');
const convertButton = document.getElementsByTagName('button');
const dateField = document.getElementsByClassName('inp-date');
const months = [31,28,31,30,31,30,31,31,30,31,30,31];

    convertButton[0].addEventListener('click',function(){
    const today = new Date();
    const inputDate = new Date(dateField[0].value);
    
    const birthDetails = {
        date : inputDate.getDate(),
        month : inputDate.getMonth()+1,
        year : inputDate.getFullYear()
    };

    let currentDate = today.getDate();
    let currentMonth = today.getMonth()+1;
    let currentYear = today.getFullYear();

    let daysOld,monthsOld,yearsOld;

    if(
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth &&
        birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate &&
        birthDetails.month == currentMonth &&
        birthDetails.year == currentYear)
    )
    {
        alert("You Can't born in Future!!");
        return ;
    }
    else{
        yearsOld = currentYear - birthDetails.year;
        if(currentMonth >= birthDetails.month){
            monthsOld = currentMonth - birthDetails.month;
        }
        else{
            yearsOld--;
            monthsOld = 12-(birthDetails.month - currentMonth);
        }
        if(currentDate >= birthDetails.date){
            daysOld = currentDate - birthDetails.date;
        }
        else{
            monthsOld--;
            daysOld = months[currentMonth-2] + currentDate - birthDetails.date;
            // months[currentMonth-2] gives previous month from current month.
            if(monthsOld < 0){
                monthsOld = 11;
                yearsOld--;
            }

        }
        document.querySelector("#years").textContent = yearsOld;
        document.querySelector("#months").textContent = monthsOld;
        document.querySelector("#days").textContent = daysOld;
    }
});