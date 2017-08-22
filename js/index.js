const URL = "http://localhost:8080/";

$('document').ready(function(){
  console.log('jsconnected');
})
//get all tech and append to page
function getAllTech(){
  $.get(URL, function(data){
    for(let i = 0; i < data.length; i++){
      let date = formatDate(data[i].date);
      $('.showAllTech').append(
        `<div class='allTechAppended center'>
          Technology: ${data[i].name}<br>
          Type: ${data[i].type}<br>
          Notes: ${data[i].note}<br>
          date: ${date}<br><br>
          <input type='button' class='techDelete btn btn-outline-dark center' id='${data[i].id}' value='Delete Technology'></input>
          <input type='button' class='techEdit btn btn-outline-dark center' id='${data[i].id}' value='Edit Technology'></input>
        </div>`
      )
    }
  })
}

  //   for(let i = 0; i < data.length; i++){
  //     let date = formatDate(data[i].date);
  //     let examples = 'examples';
  //       $('.showAllTech').append(
  //           `<div id = 'tech'>
  //             Technology: ${data[i].name} <br>
  //             Type: ${data[i].note} <br>``
  //           </div>`);
  //       //populate examples into string from array.
  //
  //       // for(let j = 0; j < data[i].examples.length; j++){
  //       //     examples += ` ${data[i].examples[j]} `
  //       // }
  //       //append examples
  //       $('.showAllTech').append(
  //         `<div id = 'examples'>
  //           Examples: ${examples}
  //         </div>
  //         <input type="button" name="edit" value="Edit" class="editButton" id="editId${data[i].id}"></input>
  //         <input type="button" name="delete" value="Delete" class="deleteButton" id="deleteId${data[i].id}"></input>`
  //         )
  //       //format the date
  //
  //       //append date
  //       $('.showAllTech').append(
  //         `<div id = 'date'>
  //           Started Using On: ${date}
  //         </div><br><br>`)
  //     }
  //   })
  // };
//end function

// function delete(){
//   $('.deleteButton').click(function(){
//     $.delete(URL, function(count){
//       console.log(count)
//       alert(count);
//     })
//   }
// }
