export default function getDate(date) {
  const givenDate = new Date(date);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][givenDate.getMonth()];
  const formattedDate = `${givenDate.getDate()} ${month} ${givenDate.getFullYear()}`;

  return formattedDate;
}
