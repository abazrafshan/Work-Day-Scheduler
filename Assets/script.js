$(document).ready(function(){
    var currentDay = moment().format('LL');
    $("#currentDay").text(currentDay);
    
    var currentTime = moment().format('HH');    
    console.log(currentTime);
    var timeBlocks = $(".row.time-block");
    console.log(timeBlocks.length);
    function setCalendar(){
        for (var i = 0; i < timeBlocks.length; i++){
            var target = $(timeBlocks[i]);
            var timeAttr = target.attr("time");
            if (currentTime > timeAttr){
                target.find(".description").addClass("past");
            }
            if (currentTime < timeAttr){
                target.find(".description").addClass("future");
            }
            if (currentTime == timeAttr){
                target.find("description").addClass("present");
            }
}}
    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        var parent = $(this).prevAll(".description").val();
        console.log(parent);
        localStorage.setItem("event", JSON.stringify(parent));
        $(".description").text("event");
        // var description = parent.filter(".description");
        // console.log(description);

    
        // localStorage.setItem("planner",JSON.stringify(planner));
    }
    )  
    



    setCalendar();

    
    






});
