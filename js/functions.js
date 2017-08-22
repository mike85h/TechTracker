//date format function
function formatDate(date){
  //split date into arr
  let dateArray = date.toString().split('');

//parse array into month day and year
  let month = `${dateArray[5]}${dateArray[6]}`
  let day = `${dateArray[8]}${dateArray[9]}`
  let year = `${dateArray[0]}${dateArray[1]}${dateArray[2]}${dateArray[3]}`
//put together full date and return it
  let formattedDate = `${month}/${day}/${year}`
  return formattedDate;
}
