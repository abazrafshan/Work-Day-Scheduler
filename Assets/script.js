$(document).ready(function(){
    var currentDay = moment().format('LL');
    $("#currentDay").text(currentDay);
    
    var currentTime = moment().format('HH');    
    console.log(currentTime);
    var timeBlocks = $(".row.time-block");
    console.log(timeBlocks.length);
    function setCalendarColor(){
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
        }
    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        var parent = this.parentNode;
        var txt = parent.childNodes[3];
        var plannerText = txt.value;
        var key = parent.id;
        planner[key] = plannerText;
    
        localStorage.setItem("planner",JSONstringify(planner));
    })    
    }

    



    setCalendarColor();

    
    






});
