
export function generateDatesBetweenGivenDates(dateA, dateB) {
    var startDate = dateA.getDate();
    var startDay = dateA.getDay();
    var endDate = dateB.getDate();
    const generatedDates = [];

    for (let i = startDate; i <= endDate; i++) {
        var d = (startDay)%7;
        generatedDates.push(d);
        startDay++;
    }
    return generatedDates;
}

export default generateDatesBetweenGivenDates;