function yesterday(year, month, day) {

    let newDay = day - 1;
    let newMonth = month;
    let newYear = year;
    let bigMonths = [1, 3, 5, 7, 8, 10, 12];
    let smallMonths = [2, 4, 6, 9, 11];

    if (newDay == 0) {
        newMonth--;
        if (newMonth == 0) {
            newYear--;
            newMonth = 12;
            newDay = 31;
        } else if (newMonth == 2) {

            let leapCheck = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            newDay = leapCheck ? 29 : 28;

        } else if (bigMonths.includes(newMonth)) {
            newDay = 31;
        } else if (smallMonths.includes(newMonth)) {
            newDay = 30;
        }
    }



    console.log(`${newYear}-${newMonth}-${newDay}`);

}
yesterday(2016, 9, 30)
yesterday(2015, 5, 10)
yesterday(2015, 3, 1)
yesterday(2015, 1, 1)

//Otpimised:

// function yesterday2(year, month, day) {
    
//    let date = new Date(year, month - 1, day);
//     date.setDate(date.getDate() - 1);
//     year = date.getFullYear();
//     month = date.getMonth() + 1;
//     day = date.getDate();

//     console.log(`${year}-${month}-${day}`);
// }
// yesterday2(2016, 9, 30)
// yesterday2(2015, 5, 10)
// yesterday2(2015, 3, 1)
// yesterday2(2015, 1, 1)