// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
            // Change flight status on the screen
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";

            // Change the background color of shuttle flight screen to blue
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";

            // Change the height of the shuttle
            let theHeight = document.getElementById("spaceShuttleHeight").innerHTML;
            theNewHeight = Number(theHeight) + 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = String(theNewHeight);
        }
    });

    let land = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        window.alert("The shuttle is landing.  Landing gear engaged.")

        // Change flight status on the screen
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed";

        // Change the background color of shuttle flight screen to green
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';

        // Change the height of the shuttle
        document.getElementById("spaceShuttleHeight").innerHTML = String(0);
    });

    let abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click", function(event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {

            // Change the flight status on the screen
            document.getElementById("flightStatus").innerHTML = "Mission aborted";

            // Change the background color of shuttle flight screen to green
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';

            // Change the height of the shuttle
            document.getElementById("spaceShuttleHeight").innerHTML = String(0);
        }
    });

    let upArrow = document.getElementById("Up");
    let rocketY = rocket.style.offsetTop;
    let rocketX = rocket.style.offsetLeft;
    console.log(rocketY);
    console.log(rocketX);

    upArrow.addEventListener("click", function(event) {
        rocketY -= 10;
        rocket.style.top = rocketY + "px";
        // Change the height of the shuttle
        let theHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        theNewHeight = Number(theHeight) + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = String(theNewHeight);
    
    });
    
    let downArrow = document.getElementById("Down");
    downArrow.addEventListener("click", function(event) {
        rocketY -= 10;
        rocket.style.top = rocketY - "px";
        // Change the height of the shuttle
        let theHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        theNewHeight = Number(theHeight) - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = String(theNewHeight);
    });

    let rightArrow = document.getElementById("Right");
    rightArrow.addEventListener("click", function(event) {
        rocketX += 10;
        rocket.style.left = rocketX + "px";
    });

    let leftArrow = document.getElementById("Left");
    leftArrow.addEventListener("click", function(event) {
        rocketX -= 10;
        rocket.style.left = rocketX + "px";
    });
           
})