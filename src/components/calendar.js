
export function generateDatesBetweenGivenDates(dateA, dateB) {
    //Assumes that the Month is the same
    var startDate = dateA.getDate();
    var startDay = dateA.getDay();
    var endDate = dateB.getDate();
    const generatedDates = [];

    for (let i = startDate; i <= endDate; i++) {
        var d = (startDay)%7;
        generatedDates.push([i, d]);
        startDay++;
    }
    // in the format of [date, day]
    return generatedDates;
}

export function nextMonth(currentMonth) {
    if (currentMonth.getMonth() == 11) {
        var current = new Date(currentMonth.getFullYear() + 1, 0, 1);
    } else {
        var current = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    }
}
