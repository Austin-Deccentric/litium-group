/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


function timeConversion(s) {
    const period = s.slice(-2);         
    const [hh, mm, ss] = s.slice(0, -2).split(":");  

    let hour = parseInt(hh);

    if (period === "AM") {
        hour = hour === 12 ? 0 : hour;
    } else {
        hour = hour === 12 ? 12 : hour + 12;
    }

    return `${String(hour).padStart(2, "0")}:${mm}:${ss}`;
}




module.exports = timeConversion;
