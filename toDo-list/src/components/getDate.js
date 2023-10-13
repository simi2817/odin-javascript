
export default function getDate(date) {
    let givenDate = new Date(date);
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][givenDate.getMonth()];
    let formattedDate = `${givenDate.getDay()} ${month} ${givenDate.getFullYear()}`;

    return formattedDate;
}