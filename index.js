


$( document ).ready(function() {
  $.get("https://frozen-ridge-41004.herokuapp.com/", function(data){
    for(let i = 0; i < data.length; i++){
        $('.showAllTech').append(
            `<div id = 'tech'>
              Technology: ${data[i].name} <br>
              Type: ${data[i].note} <br>
            </div>`)

        //populate examples into string from array.
        let examples = '';
        for(let j = 0; j < data[i].examples.length; j++){
            examples += ` ${data[i].examples[j]} `
        }

        //append examples
        $('.showAllTech').append(
          `<div id = 'examples'>
            Examples: ${examples}
          </div>`)


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
          return formattedDate
        }

        //format the date
        let date = formatDate(data[i].date)



        //append date
        $('.showAllTech').append(
          `<div id = 'date'>
            Started Using On: ${date}
          </div><br><br>`)
    }
  });
})
