// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var timeDisplayEl = $('#time-display');

$(document).ready(function() {

  //We'll keep the dayjs time things here instead of another function so that it is easier to use the variables that we need.

  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  var currentHour = dayjs().format("HH");
  var saveButton = $(".saveBtn");
  var timeBlock = $(".time-block");

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

    var userInput = $(this).parent().find("textarea").val(); //Returns the user input in the description as the value

    localStorage.setItem(hourOfDay,JSON.stringify(userInput)); //Set the hourOfDay and userInput to storage while stringifying the value.

    var storedInformation = JSON.parse(localStorage.getItem(hourOfDay));
    var textArea = $(this).parent().find("textarea").val();

    console.log("Stored information: " + storedInformation);
    console.log("Text Area information: " + textArea);

    if(storedInformation !== null){

      // textArea.val = textArea(storedInformation);
      textArea = storedInformation;
    }
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Calls the class time block because we set a variable for it. The .each(function) helps us not write repetitive code. (Was originally thinking about setting an ID for each time, but this makes the code much shorter and efficient.)
  $(timeBlock).each(function(){ 

    var comparedHour = $(this).attr("id").split("-")[1]; //We go to the ID of this time block class, and we look at the ID (EX: hour-14) and split it, and then take the second value, which in the example would be 14.

    console.log("The current hour that we are looking to block is: " + comparedHour);
    console.log("This is the current hour: " + currentHour);

    if(comparedHour < currentHour)
    {
      $(this).addClass("past"); //Add the past class here in order to make it a gray background color.
    }
    else if (comparedHour == currentHour)
    {
      $(this).addClass("present"); //Add the present class here in order to make it a red background color.
    }
    else if (comparedHour > currentHour)
    {
      $(this).addClass("future"); //Add the future class here in order to make it a green background color.
    }


  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
// 

  // TODO: Add code to display the current date in the header of the page.
 
  timeDisplayEl.text(rightNow);
});

// function displayTime() {
//   var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }



