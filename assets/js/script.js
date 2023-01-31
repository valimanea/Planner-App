var timeDisplayEl = $('#currentDay');
var timeBlocksEl = $('#calendar');

var timeIndex = ["9AM","10AM","11AM", "12AM","1PM","2PM","3PM","4PM","5PM"];


// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
  }

var timeCompare = moment().hour();

for (var i = 0; i < timeIndex.length; i++) {
    var listEl = $('<div>').addClass("row time-block");
    var timeEl = $('<div>').addClass("hour col-lg-2 col-md-2 col-sm-12")
        .text(timeIndex[i]);
    var textEl = $('<textarea>').addClass("description col-lg-9 col-md-9 col-sm-12")
        .attr("id",timeIndex[i]);

    if(timeCompare<[i+9]){
        textEl.addClass("future");
    }
    else if(timeCompare>[i+9]){
        textEl.addClass("past");
    }
    else{
        text.addClass("present");
    };

    var saveEl = $('<button>')
        .addClass("saveBtn col-lg-1 col-md-1 col-sm-12")
        .attr("data-letter", timeIndex[i])
        .text("Save");
    listEl.append(timeEl);
    listEl.append(textEl);
    listEl.append(saveEl);
    timeBlocksEl.append(listEl);
}

$(".saveBtn").on("click", function() {
    
    var textId = "#" + $(this).attr("data-letter");
    var text = $(textId).val();
    console.log(text);

    // var test2 = $(event.target);
    // console.log(test2);

    // var test3 = test2.parent('div');
    // console.log(test3);

    // var test4 = $(test5).val();
    // console.log(test4);
  });


setInterval(displayTime, 1000);




