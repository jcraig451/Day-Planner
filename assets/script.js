$('#dateToday').text(moment().format('dddd, MMMM Do'));
// Array for work day times till 5PM
var numHour = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];

numHour.forEach(function (time) {
    var text = $("<textarea>").attr("dataStorage", time);
    var btn = $("<button>").addClass("saveBtn").text("Save Note");
    var row = $("<div>").addClass("row");
    var hours = $("<div>").addClass("hour");
    let any = parseInt(time);

    row.append(hours, text, btn);

    $(".container").append(row);
    // If hour is pastTime 12 reduce by 12 from array to give ral value
    // change AM to PM
    if (any < 12) {
        hours.text(time + " " + "AM");
    } else if (any > 12) {
        hours.text(time - 12 + " "+ "PM");
    } else {
        hours.text(time + " " + "PM");
    }
});
$(document).ready(() => {
    $(".saveBtn").on("click", function () {
        localStorage.setItem($(this).prev("textarea").attr("dataStorage"), $(this).prev("textarea").val());
    });
    $("*[dataStorage]").each(function () {
        $(this).val(localStorage.getItem($(this).attr("dataStorage"))
        )
    });
});
var newDate = new Date()
var newHour = newDate.getHours();
console.log(newHour);
$("*[dataStorage").each(function () {
    if (parseInt($(this).attr("dataStorage")) === newHour) {
        $(this).addClass("presTime").removeClass("pastTime futTime");
    } else if (parseInt($(this).attr("dataStorage")) < newHour) {
        $(this).addClass("pastTime").removeClass("presTime futTime");
    } else {
        $(this).addClass("futTime").removeClass("pastTime presTime");
    };
});