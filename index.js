// code your solution here
function superbowlWin(arrayObject) {
    let capture = arrayObject.find(winResult);
    if (capture == undefined) {
        return capture;
    }
    else {
        return capture.year;
    }
}

function winResult(element) {
    return element.result === "W";
}