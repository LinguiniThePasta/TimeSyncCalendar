import * as cityTimeZones from "city-timezones";
import * as moment from "moment-timezone";

export function convertTimeZone(date, destTZ, language) {
    if (typeof date === "string") {
        date = new Date(date)
    }
    //language will be something like "EN-US, EN-UK, etc"
    let convertedDate = date.toLocaleString(language, {timeZone: destTZ});
    return new Date(convertedDate);
}

export function convertToUTC(date, sourceTZ, language) {
    if (typeof date === "string") {
        date = new Date(date)
    }
    let convertedDate = date.toLocaleString(language, {timeZone: "UTC"});
    return new Date(convertedDate);
}

export function getTimeZoneOfDevice() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz;
}


