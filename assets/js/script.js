var timeDisplayEl = $("#currentDay");
var timeBlocksEl = $("#calendar");

var timeIndex = [
  "9AM",
  "10AM",
  "11AM",
  "12AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("dddd, MMMM Do");
  timeDisplayEl.text(rightNow);
}

var timeCompare = moment().hour();
var storedText = [];

function readSavedText() {
  for (var i = 0; i < timeIndex.length; i++) {
    if (JSON.parse(localStorage.getItem(timeIndex[i])) == null) {
      storedText[i] = "";
    } else {
      storedText[i] = JSON.parse(localStorage.getItem(timeIndex[i]));
    }
  }
}

readSavedText();

for (var i = 0; i < timeIndex.length; i++) {
  var listEl = $("<div>").addClass("row time-block");
  var timeEl = $("<div>")
    .addClass("hour col-lg-2 col-md-2 col-sm-3")
    .text(timeIndex[i]);
  var textEl = $("<textarea>")
    .addClass("description col-lg-9 col-md-9 col-sm-7")
    .attr("id", timeIndex[i])
    .text(storedText[i]);

  if (timeCompare < [i + 9]) {
    textEl.addClass("future");
  } else if (timeCompare > [i + 9]) {
    textEl.addClass("past");
  } else {
    text.addClass("present");
  }

  var saveEl = $("<button>")
    .addClass("saveBtn col-lg-1 col-md-1 col-sm-2")
    .attr("data-letter", timeIndex[i])
    .text("Save");

  listEl.append(timeEl);
  listEl.append(textEl);
  listEl.append(saveEl);
  timeBlocksEl.append(listEl);
}

$("button").button({
    icon: "ui-icon-circle-arrow-e"
});

$(".saveBtn").on("click", function () {
  var Id = $(this).attr("data-letter");
  var textId = "#" + Id;
  var text = $(textId).val();
  //   console.log(text);

  localStorage.setItem(Id, JSON.stringify(text));
});

setInterval(displayTime, 1000);
