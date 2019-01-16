// Fetch calls

const data = {
    getData() {
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
    },

    getUserInterests(){
        return fetch("http://localhost:8088/interests")
        .then(response => response.json())
    }
}

export default data