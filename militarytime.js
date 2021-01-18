//time s = "12:01:00AM"
//time s = "12:01:00PM"

//get rid of AM or PM

//check if its AM or PM - includes
/*if AM 
1) get rid of AM - replace
2) switch 12 AM to 00
*/

/*if PM 
1) get rid of PM - replace
2) switch add 12 to hours
*/

/*
 * Complete the timeConversion function below.
 */
let time = "09:10:05PM"
function timeConversion(time) {
    if (time.includes("AM")) {
        time = time.replace("AM", "")
        if (time.includes("12")) {
            time.replace("12", "00")
        }
        return time
    }
    
    if (time.includes("PM")) {
        time = time.replace("PM", "")
        if (time.includes("12")) {
            return time
        }
        else {
            let hours = +time.slice(0, 2) + 12
            time  = hours.toString() + time.slice(2)
            return time
        }
    }

}

console.log(timeConversion(time));

