// Building and appeneding

import data from "./data"

const traveler = {
    buildInitial(){
        // header
        let container = document.querySelector(".output")
        let header = document.createElement("h1")
        header.setAttribute("class", "d-flex justify-content-center")
        header.innerHTML="What are you up to today?"
        container.appendChild(header)

        // form name
        let label = document.createElement("label")
        label.innerHTML="What'd you do?"
        container.appendChild(label)
        let form = document.createElement("form")
        container.appendChild(form)
        let nameInput = document.createElement("input")
        nameInput.setAttribute("class", "nameText")
        form.appendChild(nameInput)

        // form description
        let labelD = document.createElement("label")
        labelD.innerHTML="What'd you do there?"
        container.appendChild(labelD)
        let formD = document.createElement("form")
        container.appendChild(formD)
        let nameInputD = document.createElement("input")
        nameInputD.setAttribute("class", "descriptionText")
        formD.appendChild(nameInputD)

        // form cost
        let labelC = document.createElement("label")
        labelC.innerHTML="How much $ ?"
        container.appendChild(labelC)
        let formC = document.createElement("form")
        container.appendChild(formC)
        let nameInputC = document.createElement("input")
        nameInputC.setAttribute("class", "costText")
        formC.appendChild(nameInputC)

        // dropdown
        let select = document.createElement("select");
        container.appendChild(select);

        var enterButton = document.createElement("button");
        enterButton.setAttribute("class", "btn btn-dark")
        enterButton.setAttribute("id","enterButton");
        enterButton.innerHTML="enter"
        container.appendChild(enterButton)
    },

    dropdown(){
        data.getData()
        .then(options => {
            options.forEach(option => {
                let places = document.createElement("option");
                let select = document.querySelector("select");
                places.innerHTML = option.name;
                select.appendChild(places);
            })
        })
    },

    edit(){
        let editField = document.getElementById("cost")
        let desc =document.getElementById("desc")
        editField.innerHTML=" "
        let cost = document.createElement("p");
        cost.setAttribute("id", "cost")
        cost.innerHTML="<strong>It cost: <br></strong>";
        let costEdit = document.createElement("input")
        costEdit.setAttribute("class", "reviewText")
        cost.appendChild(costEdit)
        desc.appendChild(cost);


        let editButtonClick = document.querySelector("#editButton")
        editButtonClick.style.display="none";

        var newSubmitButton = document.createElement("button");
        newSubmitButton.setAttribute("class", "btn btn-dark")
        newSubmitButton.setAttribute("id","newSubmitButton");
        newSubmitButton.innerHTML="submit"
        cost.appendChild(newSubmitButton)
    }
}

export default traveler