// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = "blue";
        };
        console.log("Take Off clicked");
    })
})