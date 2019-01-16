import traveler from "./traveler"
import eventListener from "./eventListener";

// Calling of functions
traveler.buildInitial();
traveler.dropdown();
eventListener.loadMe();

let button = document.querySelector("#enterButton")
button.addEventListener("click", eventListener.enter)



// button.addEventListener("click", eventListener.userInterestsToDOM)