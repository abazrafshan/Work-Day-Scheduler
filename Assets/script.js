$(document).ready(function(){
    // Start the program getting the value that was saved in localstorage for each time block's text area  
    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));

    // Utilizes moment.js to access the current day, which is displayed as text content in the header 
    var currentDay = moment().format('LL');
    $("#currentDay").text(currentDay);
    // Set currenttime variable to reflect current hour in military time
    var currentTime = moment().format('HH');    
    console.log(currentTime);
    // 
    var timeBlocks = $(".row.time-block");
    console.log(timeBlocks.length);
    function setCalendar(){
        for (var i = 0; i < timeBlocks.length; i++){
            var target = $(timeBlocks[i]);
            var timeAttr = target.attr("time");
            console.log(timeAttr);
            if (currentTime < timeAttr){
                target.find(".description").addClass("past");
            }
            else if (currentTime == timeAttr){
                target.find(".description").addClass("present");
            }
            else {
                target.find(".description").addClass("future");
            }
}}
    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        var parent = $(this).prevAll(".description").val();
        console.log(parent);
        var timeID = $(this).parent().attr("id");
        console.log(timeID);
        localStorage.setItem(timeID, parent);
    }
    )  
    setCalendar();
});
