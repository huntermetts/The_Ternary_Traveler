// EventListeners
import eventListener from "./eventListener"
import data from "./data"
import traveler from "./traveler"

const eventListeners = {
    enter(){
        let nameValue = document.querySelector(".nameText").value
        let descriptionValue = document.querySelector(".descriptionText").value
        let costValue = document.querySelector(".costText").value
        let placeValue = document.querySelector("select").value

        console.log(placeValue)

        const entryToSave = {
            locationName: placeValue,
            name: nameValue,
            description: descriptionValue,
            cost:costValue
        };

        if (nameValue === ""){
            alert("Please fill out the empty feild(s)")
        } else if (descriptionValue === ""){
            alert("Please fill out the empty feild(s)")
        } else if (costValue === ""){
            alert("Please fill out the empty feild(s)")
        } else{
            eventListener.makePostToJson(entryToSave)
        }
    },

    makePostToJson(entryToSave){
            return fetch("http://localhost:8088/interests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // Where the argument is called and the object is passed that has been declared in eventListener.js
                body: JSON.stringify(entryToSave)
                    })
                    .then(response => response.json())
                    .then(() =>{
                        eventListener.userInterestsToDOM();
                    }
                    )
    },

    userInterestsToDOM(){
        let container = document.querySelector(".interestContainer");
        container.innerHTML="";
        data.getUserInterests()
        .then(interests => {
            interests.forEach(interest => {
                let container = document.querySelector(".interestContainer");
                let name = document.createElement("h3");
                name.innerHTML="<strong>What you did: <br></strong>" + interest.name;
                container.appendChild(name);
                let desc = document.createElement("p");
                desc.innerHTML="<strong>What'd you did there: <br></strong>" + interest.description;
                container.appendChild(desc);
                let cost = document.createElement("p");
                cost.innerHTML="<strong>It cost: <br></strong>" + interest.cost;
                container.appendChild(cost);

                let editButton = document.createElement("button");
                editButton.setAttribute("class", "btn btn-dark")
                editButton.setAttribute("id","editButton");
                editButton.innerHTML="edit"
                container.appendChild(editButton)


                let place = document.createElement("p");
                place.innerHTML="<strong>Where was it? <br></strong>" + interest.locationName;
                container.appendChild(place);

                let reviewLabel = document.createElement("label")
                reviewLabel.innerHTML="Your review:"
                container.appendChild(reviewLabel)
                let reviewForm = document.createElement("form")
                container.appendChild(reviewForm)
                let reviewInput = document.createElement("input")
                reviewInput.setAttribute("class", "reviewText")
                reviewForm.appendChild(reviewInput)

                var addReviewButton = document.createElement("button");
                addReviewButton.setAttribute("class", "btn btn-dark")
                addReviewButton.setAttribute("id","reviewButton");
                addReviewButton.innerHTML="Add your review"
                container.appendChild(addReviewButton)

                window.location.reload;
            })
        })
    },

    loadMe(){
        data.getUserInterests()
        .then(interests => {
            interests.forEach(interest => {
                let container = document.querySelector(".interestContainer");
                let name = document.createElement("h3");
                name.innerHTML="<strong>What you did: <br></strong>" + interest.name;
                container.appendChild(name);
                let desc = document.createElement("p");
                desc.setAttribute("id", "desc")
                desc.innerHTML="<strong>What'd you did there: <br></strong>" + interest.description;
                container.appendChild(desc);
                let cost = document.createElement("p");
                cost.setAttribute("id", "cost")
                cost.innerHTML="<strong>It cost: <br></strong>" + interest.cost;
                container.appendChild(cost);

                let editButton = document.createElement("button");
                editButton.setAttribute("class", "btn btn-dark")
                editButton.setAttribute("id","editButton");
                editButton.innerHTML="edit"
                container.appendChild(editButton)

                let editButtonClick = document.querySelector("#editButton")
                editButtonClick.addEventListener("click", traveler.edit)



                let place = document.createElement("p");
                place.innerHTML="<strong>Where was it? <br></strong>" + interest.locationName;
                container.appendChild(place);

                let reviewLabel = document.createElement("label")
                reviewLabel.innerHTML="<strong>Your Review: <br></strong>"
                container.appendChild(reviewLabel)
                let reviewForm = document.createElement("form")
                container.appendChild(reviewForm)
                let reviewInput = document.createElement("input")
                reviewInput.setAttribute("class", "reviewText")
                reviewForm.appendChild(reviewInput)

                let addReviewButton = document.createElement("button");
                addReviewButton.setAttribute("class", "btn btn-dark")
                addReviewButton.setAttribute("id","reviewButton");
                addReviewButton.innerHTML="add your review"
                container.appendChild(addReviewButton)
            })
        })
    }
}

export default eventListeners