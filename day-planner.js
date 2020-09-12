moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDay = $("#calenderday");
currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

updateTime();

function updateTime() {
    $("currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

};

setInterval(function () {
    updateTime()
}, 1000);


$(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").text();
    localStorage.setItem(hour, description);
});

var storedAgenda = localStorage.getItem("storeAgenda");

function save() {
    var agenda = document.getElementById("input").val;
    localStorage.setItem("storedAgenda", agenda);
    document.getElementById("savedText").innerHTML = Item + "Saved";

}

function get() {
    localStorage.getItem("storedAgenda");
    document.getElementById("openedText").innerHTML = storedItem + " OPENED";
}