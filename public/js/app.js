const weatherForm = document.getElementById("form");
const searchInput = document.getElementById("search-input");
const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");


weatherForm.addEventListener("submit", (e) => {
    const location = searchInput.value;

    messageOne.textContent = "Datas are loading...";

    fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        if(data.error){
            messageOne.textContent = data.error;
        } else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
        searchInput.value = "";
    })

    e.preventDefault();
})