// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
            // Change the status on the screen
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";

            // Change the background color of shuttle flight screen
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            // Change the height of the shuttle
            let theHeight = document.getElementById("spaceShuttleHeight").innerHTML;
            theNewHeight = Number(theHeight) + 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = String(theNewHeight);
        };
        console.log("Take Off clicked");
    })
})