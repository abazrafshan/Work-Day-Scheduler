$(document).ready(function(){
    // start the program getting the value that was saved in localstorage for each time block's text area  
    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));

    // utilizes moment.js to access the current day, which is displayed as text content in the header 
    var currentDay = moment().format('LL');
    $("#currentDay").text(currentDay);
    // set currenttime variable to reflect current hour in military time
    var currentTime = moment().format('HH'); 
       
    console.log(currentTime);
    // target time block divs
    var timeBlocks = $(".row.time-block");
    console.log(timeBlocks.length);
    // adds past, present, or future class to color code each time block div based on current time
    function setCalendar(){
        // loop that iterates by the number of time block divs in the html file
        for (var i = 0; i < timeBlocks.length; i++){
            // set target variable for each time block div
            var target = $(timeBlocks[i]);
            // set timeAttr variable to target time attribute in each time block div
            var timeAttr = target.attr("time");
            console.log(timeAttr);
            // if current time is less than the time value in the time block div, then the "past" div is added 
            if (currentTime < timeAttr){
                target.find(".description").addClass("past");
            }
            // if current time is equal to the time value in the time block div, then the "present" div is added            
            else if (currentTime == timeAttr){
                target.find(".description").addClass("present");
            }
            // otherwise the "future" div is added to all other time blocks            
            else {
                target.find(".description").addClass("future");
            }
}}
    // click event triggered when user clicks save button 
    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        // set variable parent to target the value in the current div's text area
        var parent = $(this).prevAll(".description").val();
        console.log(parent);
        // set variable timeid to target the id of the parent div
        var timeID = $(this).parent().attr("id");
        console.log(timeID);
        // set local storage with timeID and parent variables
        localStorage.setItem(timeID, parent);
    }
    ) 
    // setCalendar() function triggered
    setCalendar();
});
