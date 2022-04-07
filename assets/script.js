var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do h:mm a"))

// store values
$(".saveBtn").on('click', function () {

    var task = $(this).siblings(".description").val(); 
    //button is sibling of description
    var time = $(this).parent().attr("id");
    //attribute of parent of button

    localStorage.setItem(time, task)
})
// load saved storage by hour 
$("#hour8 .description").val(localStorage.getItem("hour8"))
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))

function timeTracker() {

    var currentHour = moment().hours()

    // time-block looper
    $(".time-block").each(function () {

        var hourBlock = parseInt($(this).attr("id").split("hour")[1])

        $(this).removeClass('past present future')

        if (hourBlock < currentHour) {
            $(this).addClass('past')
            $(this).removeClass('present')
            $(this).removeClass('future')
        
        } else if (hourBlock === currentHour) {
            $(this).addClass('present')
            $(this).removeClass('past')
            $(this).removeClass('future')

        } else {
            $(this).addClass('future')
            $(this).removeClass('past')
            $(this).removeClass('present')
        }
    })
}
timeTracker()