// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var timeDisplayEl = $('#time-display');

$(document).ready(function() {

  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  var currentHour = dayjs().format("HH");
  var saveButton = $(".saveBtn");

  //console.log(rightNow);
  //console.log(currentHour);


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(saveButton).on("click", function(){
    var hourOfDay = $(this).parent().attr("id").split("-")[1]; //Splits the (id of the parent, which this id is (hour-number) and retrieves the number because of the 1)

    // console.log(hourOfDay);

    var userInput = $(this).parent().find(".description").val(); //Returns the user input in the description as the value
    
    localStorage.setItem(hourOfDay,JSON.stringify(value)); //Set the hourOfDay and userInput to storage while stringifying the value.
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 
  timeDisplayEl.text(rightNow);
});

// function displayTime() {
//   var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }



